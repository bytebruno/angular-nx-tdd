import { createAction, props } from '@ngrx/store';
import { Photos } from '../../entities/photos';

export const loadPhotos = createAction('[Photos] Load Photos');

export const loadPhotosSuccess = createAction(
  '[Photos] Load Photos Success',
  props<{ photos: Photos[] }>()
);

export const loadPhotosFailure = createAction(
  '[Photos] Load Photos Failure',
  props<{ error: any }>()
);
