import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as PhotosActions from './photos.actions';
import { Photo } from '../../entities/photo';

export const PHOTOS_FEATURE_KEY = 'photos';

export interface PhotosState extends EntityState<Photo> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
  currentPage: number;
  favorites: EntityState<Photo>;
}

export interface PhotosPartialState {
  readonly [PHOTOS_FEATURE_KEY]: PhotosState;
}

export const photosAdapter: EntityAdapter<Photo> = createEntityAdapter<Photo>();
export const favoritesAdapter: EntityAdapter<Photo> =
  createEntityAdapter<Photo>();

export const initialState: PhotosState = photosAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  currentPage: 1,
  favorites: favoritesAdapter.getInitialState(),
});

const photosReducer = createReducer(
  initialState,
  on(
    PhotosActions.loadPhotos,
    (state): PhotosState => ({
      ...state,
      loaded: false,
      error: null,
    })
  ),
  on(PhotosActions.loadPhotosSuccess, (state, { photos }) =>
    photosAdapter.upsertMany(photos, {
      ...state,
      loaded: true,
      currentPage: state.currentPage + 1,
    })
  ),
  on(
    PhotosActions.loadPhotosFailure,
    (state, { error }): PhotosState => ({
      ...state,
      error,
    })
  ),
  on(
    PhotosActions.addFavorite,
    (state, { photo }): PhotosState => ({
      ...state,
      favorites: favoritesAdapter.upsertOne(photo, {
        ...state.favorites,
      }),
    })
  ),
  on(
    PhotosActions.removeFavorite,
    (state, { photoId }): PhotosState => ({
      ...state,
      favorites: favoritesAdapter.removeOne(photoId, {
        ...state.favorites,
      }),
    })
  )
);

export function reducer(state: PhotosState | undefined, action: Action) {
  return photosReducer(state, action);
}
