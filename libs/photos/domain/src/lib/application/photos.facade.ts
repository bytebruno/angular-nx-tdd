import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { loadMorePhotos, loadPhotos } from '../+state/photos/photos.actions';
import * as PhotosSelectors from '../+state/photos/photos.selectors';

@Injectable({ providedIn: 'root' })
export class PhotosFacade {
  loaded$ = this.store.select(PhotosSelectors.selectPhotosLoaded);
  photosList$ = this.store.select(PhotosSelectors.selectAllPhotos);
  selectedPhotos$ = this.store.select(PhotosSelectors.selectSelected);
  selectCurrentPage$ = this.store.select(PhotosSelectors.selectCurrentPage);

  constructor(private store: Store) {}

  load(): void {
    this.store.dispatch(loadPhotos());
  }

  loadMore(): void {
    this.store.dispatch(loadMorePhotos());
  }
}
