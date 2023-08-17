import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainLayoutComponent } from '@angular-nx-tdd/shared/ui-common';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'photos',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@angular-nx-tdd/photos/feature-photos').then(
            (m) => m.PhotosFeaturePhotosModule
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'photos',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, { initialNavigation: 'enabledBlocking' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
