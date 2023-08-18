import { Photo } from '@angular-nx-tdd/photos/domain';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'photos-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
})
export class PhotoCardComponent {
  @Input() photo: Photo | null = null;
}
