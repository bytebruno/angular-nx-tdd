import { Photo, PhotosFacade } from '@angular-nx-tdd/photos/domain';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotoDetailResolver {
  constructor(private photosFacade: PhotosFacade, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Photo | null> {
    if (route.params['id']) {
      return this.photosFacade.getFavoriteById(route.params['id']).pipe(
        map((photo) => {
          if (!photo) {
            this.router.navigateByUrl('favorites');
            return null;
          }
          return photo;
        })
      );
    } else {
      this.router.navigateByUrl('favorites');
      return of(null);
    }
  }
}
