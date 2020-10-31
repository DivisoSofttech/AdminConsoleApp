import { OAuthService, JwksValidationHandler, AuthConfig } from 'angular-oauth2-oidc';
import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';


export const authConfig: AuthConfig = {
    issuer: 'http:/dev.keycloak.divisosofttech.com:9080/auth/realms/jhipster',
    redirectUri: window.location.origin,
    clientId: 'web_app',
    scope: 'openid profile email' ,
    //scope: 'openid profile email voucher offline_access',
    dummyClientSecret: '5a81bfcd-9f66-441b-9e9f-6c011b8c8644',
    tokenEndpoint: 'http://dev.keycloak.divisosofttech.com:9080/auth/realms/jhipster/protocol/openid-connect/token',
    userinfoEndpoint: 'http://dev.keycloak.divisosofttech.com:9080/auth/realms/jhipster/protocol/openid-connect/userinfo',
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
