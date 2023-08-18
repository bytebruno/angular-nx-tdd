import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollTrackerComponent } from './scroll-tracker.component';

describe('ScrollTrackerComponent', () => {
  let component: ScrollTrackerComponent;
  let fixture: ComponentFixture<ScrollTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrollTrackerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScrollTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
