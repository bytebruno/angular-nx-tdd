import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosDomainModule } from '@undefined/photos/domain';
import { PhotosComponent } from './photos.component';

@NgModule({
  imports: [CommonModule, PhotosDomainModule],
  declarations: [PhotosComponent],
  exports: [PhotosComponent],
})
export class PhotosFeaturePhotosModule {}
