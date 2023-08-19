import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { Subject, debounceTime, skip } from 'rxjs';

@Component({
  selector: 'ui-scroll-tracker',
  templateUrl: './scroll-tracker.component.html',
  styleUrls: ['./scroll-tracker.component.scss'],
})
export class ScrollTrackerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('anchor') anchor: ElementRef<HTMLElement> | undefined;
  @Output() scrolled = new EventEmitter();

  eventManager: Subject<null> = new Subject<null>();

  private observer: IntersectionObserver | undefined;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        this.emitScrollEvent(entry);
      },
      { rootMargin: '300px', threshold: 0.2 }
    );
    if (this.anchor) {
      this.observer.observe(this.anchor.nativeElement);
    }

    this.eventManager
      .pipe(skip(1), debounceTime(100))
      .subscribe(() => this.scrolled.emit());
  }

  emitScrollEvent(entry: IntersectionObserverEntry) {
    if (entry.isIntersecting) {
      this.eventManager.next(null);
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
