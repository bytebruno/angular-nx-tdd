import { Photo } from '@angular-nx-tdd/photos/domain';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'photos-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.scss'],
})
export class PhotoGridComponent {
  @Input() photos: Photo[] | null = null;

  trackById(_: number, photo: Photo): string {
    return photo.id;
  }
}
