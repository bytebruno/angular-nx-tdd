import { PhotosFacade } from '@angular-nx-tdd/photos/domain';
import { Component } from '@angular/core';

@Component({
  selector: 'photos-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  favorites$ = this.photosFacade.favorites$;

  constructor(private photosFacade: PhotosFacade) {}
}
