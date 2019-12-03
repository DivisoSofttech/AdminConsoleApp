import { OAuthService, JwksValidationHandler, AuthConfig } from 'angular-oauth2-oidc';
import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';


export const authConfig: AuthConfig = {
  issuer: 'https://dev.servers.divisosofttech.com/auth/realms/graeshoppe',
  redirectUri: window.location.origin,
  clientId: 'account',
  scope: 'openid profile email voucher offline_access',
  dummyClientSecret: 'd4f03412-cdad-45b0-9ccc-beddd8399ac5',
  tokenEndpoint: 'https://dev.servers.divisosofttech.com/auth/realms/graeshoppe/protocol/openid-connect/token',
  userinfoEndpoint: 'https://dev.servers.divisosofttech.com/auth/realms/graeshoppe/protocol/openid-connect/userinfo',
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
