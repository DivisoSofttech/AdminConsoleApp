import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './security/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  { path: 'users', loadChildren: './users/users.module#UsersPageModule', canActivate: [AuthGuard] },
  { path: 'offers', loadChildren: './offers/offers.module#OffersPageModule', canActivate: [AuthGuard] },
  { path: 'reports', loadChildren: './reports/reports.module#ReportsPageModule', canActivate: [AuthGuard] },
  { path: 'new-offer', loadChildren: './new-offer/new-offer.module#NewOfferPageModule', canActivate: [AuthGuard] },
  { path: 'landing', loadChildren: './landing/landing.module#LandingPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
