import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosDomainModule } from '@angular-nx-tdd/photos/domain';
import { PhotosComponent } from './photos.component';
import { PhotosFeaturePhotosRoutingModule } from './photos-feature-photos.routing.module';

@NgModule({
  imports: [CommonModule, PhotosDomainModule, PhotosFeaturePhotosRoutingModule],
  declarations: [PhotosComponent],
  exports: [PhotosComponent],
})
export class PhotosFeaturePhotosModule {}
