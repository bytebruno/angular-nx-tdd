import { Component, OnInit } from '@angular/core';
import { PhotosFacade } from '@undefined/photos/domain';

@Component({
  selector: 'photos-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
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
}
