import * as fromPhotos from './+state/photos/photos.reducer';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosEffects } from './+state/photos/photos.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromPhotos.PHOTOS_FEATURE_KEY, fromPhotos.reducer),
    EffectsModule.forFeature([PhotosEffects]),
  ],
})
export class PhotosDomainModule {}
