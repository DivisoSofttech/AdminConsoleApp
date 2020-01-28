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
  { path: 'create-banner/:id', loadChildren: './pages/create-banner/create-banner.module#CreateBannerPageModule' },
  { path: 'cancellation', loadChildren: './pages/cancellation/cancellation.module#CancellationPageModule' },
  { path: 'create-cancellation/:id', loadChildren: './pages/create-cancellation/create-cancellation.module#CreateCancellationPageModule' },
  { path: 'feedbacks', loadChildren: './pages/feedbacks/feedbacks.module#FeedbacksPageModule' },
  { path: 'terms-and-conditions', loadChildren: './pages/terms-and-conditions/terms-and-conditions.module#TermsAndConditionsPageModule' },
  { path: 'new-terms-and-conditions',
   loadChildren: './pages/new-terms-and-conditions/new-terms-and-conditions.module#NewTermsAndConditionsPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'new-about', loadChildren: './pages/new-about/new-about.module#NewAboutPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
