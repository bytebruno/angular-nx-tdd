import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { addFavorite, loadPhotos } from '../+state/photos/photos.actions';
import * as PhotosSelectors from '../+state/photos/photos.selectors';
import { Photo } from '../entities/photo';

@Injectable({ providedIn: 'root' })
export class PhotosFacade {
  loaded$ = this.store.select(PhotosSelectors.selectPhotosLoaded);
  photosList$ = this.store.select(PhotosSelectors.selectAllPhotos);
  selectedPhotos$ = this.store.select(PhotosSelectors.selectSelected);
  currentPage$ = this.store.select(PhotosSelectors.selectCurrentPage);

  constructor(private store: Store) {}

  load(): void {
    this.store.dispatch(loadPhotos());
  }

  saveAsFavorite(photo: Photo): void {
    this.store.dispatch(addFavorite({ photo }));
  }
}
