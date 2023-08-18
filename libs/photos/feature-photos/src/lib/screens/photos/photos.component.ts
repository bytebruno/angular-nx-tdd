import { Component, OnInit } from '@angular/core';
import { PhotosFacade } from '@angular-nx-tdd/photos/domain';

@Component({
  selector: 'photos-photos',
  templateUrl: './photos.component.html',
})
export class PhotosComponent implements OnInit {
  photosList$ = this.photosFacade.photosList$;

  constructor(private photosFacade: PhotosFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.photosFacade.load();
  }

  onScroll() {
    console.log('scroll');
  }
}
