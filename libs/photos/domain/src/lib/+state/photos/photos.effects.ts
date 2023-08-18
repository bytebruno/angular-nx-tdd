import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as PhotosActions from './photos.actions';
import { PhotosDataService } from '../../infrastructure/photos.data.service';

@Injectable()
export class PhotosEffects {
  loadPhotos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PhotosActions.loadPhotos),
      switchMap((action) =>
        this.photosDataService.load().pipe(
          map((photos) => PhotosActions.loadPhotosSuccess({ photos })),
          catchError((error) => of(PhotosActions.loadPhotosFailure({ error })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private photosDataService: PhotosDataService
  ) {}
}
