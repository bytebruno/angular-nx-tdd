import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'ui-scroll-tracker',
  templateUrl: './scroll-tracker.component.html',
  styleUrls: ['./scroll-tracker.component.scss'],
})
export class ScrollTrackerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('anchor') anchor: ElementRef<HTMLElement> | undefined;
  @Output() scrolled = new EventEmitter();

  private observer: IntersectionObserver | undefined;
  private hasIntersected = false;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        this.emitScrollEvent(entry);
      },
      { rootMargin: '10px', threshold: 0.01 }
    );
    if (this.anchor) {
      this.observer.observe(this.anchor.nativeElement);
    }
  }

  emitScrollEvent(entry: IntersectionObserverEntry) {
    if (entry.isIntersecting && this.hasIntersected) {
      this.scrolled.emit();
    }
    this.hasIntersected = true;
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
