import { createAction, props } from '@ngrx/store';
import { Photo } from '../../entities/photo';

export const loadPhotos = createAction('[Photos] Load Photos');

export const loadPhotosSuccess = createAction(
  '[Photos] Load Photos Success',
  props<{ photos: Photo[] }>()
);

export const loadPhotosFailure = createAction(
  '[Photos] Load Photos Failure',
  props<{ error: any }>()
);

export const loadMorePhotos = createAction('[Photos] Load More Photos');
