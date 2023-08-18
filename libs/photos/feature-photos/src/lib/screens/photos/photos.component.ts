import { Component, OnDestroy, OnInit } from '@angular/core';
import { PhotosFacade } from '@angular-nx-tdd/photos/domain';
import { Subscription } from 'rxjs';

@Component({
  selector: 'photos-photos',
  templateUrl: './photos.component.html',
})
export class PhotosComponent implements OnInit, OnDestroy {
  photosList$ = this.photosFacade.photosList$;
  loaded$ = this.photosFacade.loaded$;
  loadedSubscription = new Subscription();
  loaded = false;

  constructor(private photosFacade: PhotosFacade) {}

  ngOnInit(): void {
    this.load();
    this.loadedSubscription = this.photosFacade.loaded$.subscribe(
      (val) => (this.loaded = val)
    );
  }

  ngOnDestroy(): void {
    this.loadedSubscription?.unsubscribe();
  }

  load(): void {
    this.photosFacade.load();
  }

  onScroll() {
    if (!this.loaded) return;
    console.log('scrolled');
    this.photosFacade.loadMore();
  }
}
