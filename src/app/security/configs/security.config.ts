import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig= {
    issuer: 'http://dev.servers.divisosofttech.com:8888/auth/realms/graeshoppe',
    redirectUri: window.location.origin,
    clientId: 'account',
    scope: 'openid profile email',
    dummyClientSecret: '61aed705-1f70-4955-ad23-94bc15c09c29',
    tokenEndpoint: 'http://dev.servers.divisosofttech.com:8888/auth/realms/graeshoppe/protocol/openid-connect/token',
    userinfoEndpoint: 'http://dev.servers.divisosofttech.com:8888/auth/realms/graeshoppe/protocol/openid-connect/auth',
    oidc: false,
    requireHttps: false
}
