import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private oauthService: OAuthService, private navController: NavController) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log("Check if token valid "+this.oauthService.hasValidAccessToken());
    if (this.oauthService.hasValidAccessToken()) {
      return true;
    }

    this.navController.navigateRoot('/landing');
    return false;
  }
}
