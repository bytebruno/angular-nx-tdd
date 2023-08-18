import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollTrackerComponent } from './scroll-tracker.component';

describe('ScrollTrackerComponent', () => {
  let component: ScrollTrackerComponent;
  let fixture: ComponentFixture<ScrollTrackerComponent>;

  beforeEach(async () => {
    window.IntersectionObserver = jest.fn().mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });

    await TestBed.configureTestingModule({
      declarations: [ScrollTrackerComponent],
      imports: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit scrolled event when element intersects viewport and hasIntersected before', () => {
    const emitSpy = jest.spyOn(component.scrolled, 'emit');

    const mockEntry = { isIntersecting: true } as IntersectionObserverEntry;

    component['hasIntersected'] = true;
    component.emitScrollEvent(mockEntry);

    expect(emitSpy).toHaveBeenCalled();
  });
});
