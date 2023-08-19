import { Photo, PhotosFacade } from '@angular-nx-tdd/photos/domain';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'photos-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  favorites$ = this.photosFacade.favorites$;

  constructor(private photosFacade: PhotosFacade, private router: Router) {}

  openPhotoDetails(photo: Photo | null) {
    if (photo === null) return;
    this.router.navigateByUrl(`photo/${photo.id}`);
  }
}
