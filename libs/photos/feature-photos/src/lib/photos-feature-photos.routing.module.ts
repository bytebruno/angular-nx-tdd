import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PhotosComponent } from './photos.component';

export const APP_ROUTES: Routes = [
  {
    path: 'photos',
    component: PhotosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule],
})
export class PhotosFeaturePhotosRoutingModule {}
