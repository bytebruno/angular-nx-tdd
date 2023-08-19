import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PhotosComponent } from './screens/photos/photos.component';
import { FavoritesComponent } from './screens/favorites/favorites.component';
import { PhotoDetailComponent } from './screens/photo-detail/photo-detail.component';
import { PhotoDetailResolver } from './screens/photo-detail/photo-detail.resolver';

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
    resolve: { selectedFavorite: PhotoDetailResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule],
})
export class PhotosFeaturePhotosRoutingModule {}
