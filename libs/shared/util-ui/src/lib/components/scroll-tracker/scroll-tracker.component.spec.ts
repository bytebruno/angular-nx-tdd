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

  it('should skip the first emission', () => {
    const emitSpy = jest.spyOn(component.scrolled, 'emit');
    const mockEntry = { isIntersecting: true } as IntersectionObserverEntry;

    component.emitScrollEvent(mockEntry);

    expect(emitSpy).not.toHaveBeenCalled();
  });

  it('should disconnect observer on ngOnDestroy', () => {
    const disconnectSpy = jest.spyOn(component['observer'], 'disconnect');

    component.ngOnDestroy();

    expect(disconnectSpy).toHaveBeenCalled();
  });

  it('should not throw error on ngOnDestroy when observer is not defined', () => {
    component['observer'] = undefined;

    expect(() => {
      component.ngOnDestroy();
    }).not.toThrow();
  });
});
