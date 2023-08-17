import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosDomainModule } from '@angular-nx-tdd/photos/domain';
import { PhotosComponent } from './screens/photos/photos.component';
import { PhotosFeaturePhotosRoutingModule } from './photos-feature-photos.routing.module';
import { FavoritesComponent } from './screens/favorites/favorites.component';

@NgModule({
  imports: [CommonModule, PhotosDomainModule, PhotosFeaturePhotosRoutingModule],
  declarations: [PhotosComponent, FavoritesComponent],
  exports: [PhotosComponent],
})
export class PhotosFeaturePhotosModule {}
