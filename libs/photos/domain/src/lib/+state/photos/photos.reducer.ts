import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as PhotosActions from './photos.actions';
import { Photo } from '../../entities/photo';

export const PHOTOS_FEATURE_KEY = 'photos';

export interface State extends EntityState<Photo> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
  currentPage: number;
  favorites: EntityState<Photo>;
}

export interface PhotosPartialState {
  readonly [PHOTOS_FEATURE_KEY]: State;
}

export const photosAdapter: EntityAdapter<Photo> = createEntityAdapter<Photo>();
export const favoritesAdapter: EntityAdapter<Photo> =
  createEntityAdapter<Photo>();

export const initialState: State = photosAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  currentPage: 1,
  favorites: favoritesAdapter.getInitialState(),
});

const photosReducer = createReducer(
  initialState,
  on(
    PhotosActions.loadPhotos,
    (state): State => ({
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
    (state, { error }): State => ({
      ...state,
      error,
    })
  ),
  on(
    PhotosActions.addFavorite,
    (state, { photo }): State => ({
      ...state,
      favorites: favoritesAdapter.upsertOne(photo, {
        ...state.favorites,
      }),
    })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return photosReducer(state, action);
}
