import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PhotosComponent } from './screens/photos/photos.component';
import { FavoritesComponent } from './screens/favorites/favorites.component';
import { PhotoDetailComponent } from './screens/photo-detail/photo-detail.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: PhotosComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
  {
    path: 'photo/:id',
    component: PhotoDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule],
})
export class PhotosFeaturePhotosRoutingModule {}
