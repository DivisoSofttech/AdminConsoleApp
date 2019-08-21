import { OAuthService, JwksValidationHandler, AuthConfig } from 'angular-oauth2-oidc';
import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';


export const authConfig: AuthConfig = {
  issuer: 'http://dev.servers.divisosofttech.com:8888/auth/realms/graeshoppe',
  redirectUri: window.location.origin,
  clientId: 'account',
  scope: 'openid profile email voucher offline_access',
  dummyClientSecret: '61aed705-1f70-4955-ad23-94bc15c09c29',
  tokenEndpoint: 'http://dev.servers.divisosofttech.com:8888/auth/realms/graeshoppe/protocol/openid-connect/token',
  userinfoEndpoint: 'http://dev.servers.divisosofttech.com:8888/auth/realms/graeshoppe/protocol/openid-connect/userinfo',
  oidc: false,
  requireHttps: false,
};


@Injectable()
export class AuthGuardConfig {

    constructor(
        private oauthService: OAuthService
    ) {
        this.configureWithNewConfigApi();
    }

    private configureWithNewConfigApi() {

        this.oauthService.configure(authConfig);
        this.oauthService.setStorage(localStorage);
        this.oauthService.tokenValidationHandler = new JwksValidationHandler();
        this.oauthService.loadDiscoveryDocumentAndTryLogin();
        this.oauthService.setupAutomaticSilentRefresh();
    }
}
