import { async } from '@angular/core/testing';
import { Util } from './../util';
import { KeycloakAdminConfig } from './../../configs/keycloak.admin.config';
import { OAuthService } from 'angular-oauth2-oidc';
import { KeycloakAdminClient } from 'keycloak-admin/lib/client';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  keycloakAdmin: KeycloakAdminClient;

  constructor(
    private oauthService: OAuthService,
    private keycloakConfig: KeycloakAdminConfig,
    private storage: Storage,
    private util: Util
  ) {


  }


  createAccount(user: any, password: string, success: any, err: any) {
    this.keycloakConfig.refreshClient().then(() => {
      this.keycloakAdmin = this.keycloakConfig.kcAdminClient;
      user.realm = 'graeshoppe';
      user.credentials = [{ type: 'password', value: password }];
      user.attributes = map;
      user.enabled = true;

      console.log('log 1');

      this.keycloakAdmin.users.create(user)
        .then( async res => {
          await this.keycloakAdmin.roles.findOneByName({name:'administator',realm:'graeshoppe'}).then(
            async roles=>{
              await this.keycloakAdmin.users.addRealmRoleMappings(
                {id:res.id,
                realm:'graeshoppe',
                roles: [
                  {
                    id: roles.id,
                    name: roles.name
                  }
                ]
                }
              );
            }
          );
          success(res);
        },error=>{err(error)})
        .catch(e => {
          err(e);
        });
    },err=>{
      console.log('error ',err);
    }
    );

  }

  async isAuthenticated(): Promise<boolean> {
    return await this.oauthService.hasValidAccessToken();
  }

  authenticate(credentials: any, success: any, err: any) {
    this.oauthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(
      credentials.username,
      credentials.password,
      new HttpHeaders()
    ).then(data => {
      this.storage.set('user' , data);
      success();
    }).catch(e => {
      err();
    });
  }

  async getCurrentUserDetails() {
    return await this.oauthService.loadUserProfile();
  }

  async updateCurrentUserDetails(keycloakUser: any): Promise<void> {
    return await this.keycloakAdmin.users.update(
      {
        id: keycloakUser.sub,
        realm: 'graeshoppe'
      },
      {
        firstName: keycloakUser.name.split(' ')[0],
        lastName: keycloakUser.name.split(' ')[1],
        email: keycloakUser.email
      }
    );
  }

  resetPassword(newPassword , success , err) {
    this.storage.get('user')
    .then(user => {
      this.keycloakConfig.refreshClient()
      .then(() => {
        this.keycloakAdmin = this.keycloakConfig.kcAdminClient;
        this.keycloakAdmin.users.resetPassword(
          {
            realm: 'graeshoppe',
            id: user.sub,
            credential: {
              temporary: false,
              type: 'password',
              value: newPassword,
            },
          }
        ).then(data => {
          success(data);
        })
        .catch(e => {
          err(e);
        });
      });

    });
  }

  logout() {
    this.oauthService.logOut();
    this.storage.clear();
    this.util.navigateToLogin();
  }
}
