import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { loadPhotos } from '../+state/photos/photos.actions';
import * as fromPhotos from '../+state/photos/photos.reducer';
import * as PhotosSelectors from '../+state/photos/photos.selectors';

@Injectable({ providedIn: 'root' })
export class PhotosFacade {
  loaded$ = this.store.pipe(select(PhotosSelectors.getPhotosLoaded));
  photosList$ = this.store.pipe(select(PhotosSelectors.getAllPhotos));
  selectedPhotos$ = this.store.pipe(select(PhotosSelectors.getSelected));

  constructor(private store: Store<fromPhotos.PhotosPartialState>) {}

  load(): void {
    this.store.dispatch(loadPhotos());
  }
}
