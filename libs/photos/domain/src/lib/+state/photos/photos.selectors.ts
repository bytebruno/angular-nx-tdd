import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PHOTOS_FEATURE_KEY, State, photosAdapter } from './photos.reducer';

// Lookup the 'Photos' feature state managed by NgRx
export const selectPhotosState =
  createFeatureSelector<State>(PHOTOS_FEATURE_KEY);

const { selectAll, selectEntities } = photosAdapter.getSelectors();

export const selectPhotosLoaded = createSelector(
  selectPhotosState,
  (state: State) => state.loaded
);

export const selectPhotosError = createSelector(
  selectPhotosState,
  (state: State) => state.error
);

export const selectAllPhotos = createSelector(
  selectPhotosState,
  (state: State) => selectAll(state)
);

export const selectPhotosEntities = createSelector(
  selectPhotosState,
  (state: State) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectPhotosState,
  (state: State) => state.selectedId
);

export const selectSelected = createSelector(
  selectPhotosEntities,
  selectSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

export const selectCurrentPage = createSelector(
  selectPhotosState,
  (state: State) => state.currentPage
);

export const selectFavorites = createSelector(
  selectPhotosState,
  (state: State) => selectAll(state.favorites)
);

export const selectFavoritesEntities = createSelector(
  selectPhotosState,
  (state: State) => selectEntities(state.favorites)
);

export const selectFavoriteById = (id: number) =>
  createSelector(selectFavoritesEntities, (entities) => entities[id]);
