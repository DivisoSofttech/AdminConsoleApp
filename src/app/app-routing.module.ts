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
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'users', loadChildren: './users/users.module#UsersPageModule' },
  { path: 'offers', loadChildren: './offers/offers.module#OffersPageModule' },
  { path: 'reports', loadChildren: './reports/reports.module#ReportsPageModule' },
  { path: 'new-offer', loadChildren: './new-offer/new-offer.module#NewOfferPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
