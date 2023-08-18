import { Component, OnDestroy, OnInit } from '@angular/core';
import { PhotosFacade } from '@angular-nx-tdd/photos/domain';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'photos-photos',
  templateUrl: './photos.component.html',
})
export class PhotosComponent implements OnInit, OnDestroy {
  private componentDestroyed$ = new Subject<void>();
  photosList$ = this.photosFacade.photosList$;
  loaded$ = this.photosFacade.loaded$;
  currentPage$ = this.photosFacade.currentPage$;

  loaded = false;

  constructor(private photosFacade: PhotosFacade) {}

  ngOnInit(): void {
    this.initializeComponent();
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

  initializeComponent(): void {
    this.loaded$
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((loaded) => (this.loaded = loaded));

    this.currentPage$
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((currentPage) => {
        if (currentPage === 1) {
          this.load();
        }
      });
  }

  load(): void {
    this.photosFacade.load();
  }

  onScroll() {
    if (!this.loaded) return;
    console.log('scrolled');
    this.photosFacade.load();
  }
}
