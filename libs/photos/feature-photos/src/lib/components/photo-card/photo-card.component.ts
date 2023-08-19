import { Photo } from '@angular-nx-tdd/photos/domain';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'photos-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
})
export class PhotoCardComponent {
  @Input() photo: Photo | null = null;
  @Input() useFullResolution = false;
  @Input() clickable = true;
  @Output() clickEventEmitter = new EventEmitter<Photo | null>();

  emitClickEvent(): void {
    this.clickEventEmitter.emit(this.photo);
  }
}
