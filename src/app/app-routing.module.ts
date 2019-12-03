import { AuthGuardService } from './services/security/auth-guard.service';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuardService]
  },
  { path: 'users', loadChildren: './pages/users/users.module#UsersPageModule', canActivate: [AuthGuardService] },
  { path: 'offers', loadChildren: './pages/offers/offers.module#OffersPageModule', canActivate: [AuthGuardService] },
  { path: 'reports', loadChildren: './pages/reports/reports.module#ReportsPageModule', canActivate: [AuthGuardService] },
  { path: 'new-offer', loadChildren: './pages/new-offer/new-offer.module#NewOfferPageModule', canActivate: [AuthGuardService] },
  { path: 'login', loadChildren: './pages/login-signup/login-signup.module#LoginSignupPageModule' },
  { path: 'banners', loadChildren: './pages/banners/banners.module#BannersPageModule' },
  { path: 'create-banner', loadChildren: './pages/create-banner/create-banner.module#CreateBannerPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
