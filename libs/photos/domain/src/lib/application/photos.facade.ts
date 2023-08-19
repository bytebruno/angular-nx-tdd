import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  addFavorite,
  loadPhotos,
  removeFavorite,
} from '../+state/photos/photos.actions';
import * as PhotosSelectors from '../+state/photos/photos.selectors';
import { Photo } from '../entities/photo';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PhotosFacade {
  currentPage$ = this.store.select(PhotosSelectors.selectCurrentPage);
  favorites$ = this.store.select(PhotosSelectors.selectFavorites);
  loaded$ = this.store.select(PhotosSelectors.selectPhotosLoaded);
  photosList$ = this.store.select(PhotosSelectors.selectAllPhotos);

  constructor(private store: Store) {}

  load(): void {
    this.store.dispatch(loadPhotos());
  }

  saveAsFavorite(photo: Photo): void {
    this.store.dispatch(addFavorite({ photo }));
  }

  removeFavorite(photoId: string): void {
    this.store.dispatch(removeFavorite({ photoId }));
  }

  getFavoriteById(id: number): Observable<Photo | undefined> {
    return this.store.select(PhotosSelectors.selectFavoriteById(id));
  }
}
