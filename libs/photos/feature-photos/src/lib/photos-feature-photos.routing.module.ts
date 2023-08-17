import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PhotosComponent } from './screens/photos/photos.component';
import { FavoritesComponent } from './screens/favorites/favorites.component';

export const APP_ROUTES: Routes = [
  {
    path: 'photos',
    component: PhotosComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule],
})
export class PhotosFeaturePhotosRoutingModule {}
