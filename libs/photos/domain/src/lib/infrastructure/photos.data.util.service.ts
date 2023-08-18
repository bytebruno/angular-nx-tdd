import { Injectable } from '@angular/core';
import { Photo } from '../entities/photo';

@Injectable({ providedIn: 'root' })
export class PhotosDataUtilService {
  addLiteUrlToPhoto(photos: Photo[]): Photo[] {
    return photos.map((photo) => {
      const urlParts = photo.download_url.split('/');
      const lastIndex = urlParts.length - 1;
      urlParts[lastIndex - 1] = '300';
      urlParts[lastIndex] = '300';
      photo.lite_download_url = urlParts.join('/');
      return photo;
    });
  }
}
