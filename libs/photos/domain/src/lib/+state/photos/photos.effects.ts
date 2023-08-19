import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType, concatLatestFrom } from '@ngrx/effects';
import { catchError, delay, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as PhotosActions from './photos.actions';
import { PhotosDataService } from '../../infrastructure/photos.data.service';
import { PhotosDataUtilService } from '../../infrastructure/photos.data.util.service';
import { PhotosFacade } from '../../application/photos.facade';

@Injectable()
export class PhotosEffects {
  loadPhotos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PhotosActions.loadPhotos),
      // I'm using real API calls (but is quite fast), I'm adding the delay just to see better the loading behavior.
      // Comment the line below if you want to remove it
      delay(Math.floor(Math.random() * 101) + 200),
      concatLatestFrom(() => this.photosFacade.currentPage$),
      switchMap(([_, currentPage]) =>
        this.photosDataService.load(currentPage).pipe(
          map((photos) => {
            console.log(currentPage);
            return PhotosActions.loadPhotosSuccess({
              photos: this.photosDataUtilService.addLiteUrlToPhoto(photos),
            });
          }),
          catchError((error) => of(PhotosActions.loadPhotosFailure({ error })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private photosDataService: PhotosDataService,
    private photosDataUtilService: PhotosDataUtilService,
    private photosFacade: PhotosFacade
  ) {}
}
