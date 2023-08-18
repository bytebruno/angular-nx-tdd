import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosDomainModule } from '@angular-nx-tdd/photos/domain';
import { PhotosComponent } from './screens/photos/photos.component';
import { PhotosFeaturePhotosRoutingModule } from './photos-feature-photos.routing.module';
import { FavoritesComponent } from './screens/favorites/favorites.component';
import { PhotoCardComponent } from './components/photo-card/photo-card.component';
import { SharedUiCommonModule } from '@angular-nx-tdd/shared/ui-common';
import { PhotoGridComponent } from './components/photo-grid/photo-grid.component';

@NgModule({
  imports: [
    CommonModule,
    PhotosDomainModule,
    PhotosFeaturePhotosRoutingModule,
    SharedUiCommonModule,
  ],
  declarations: [
    PhotosComponent,
    FavoritesComponent,
    PhotoCardComponent,
    PhotoGridComponent,
  ],
  exports: [PhotosComponent],
})
export class PhotosFeaturePhotosModule {}
