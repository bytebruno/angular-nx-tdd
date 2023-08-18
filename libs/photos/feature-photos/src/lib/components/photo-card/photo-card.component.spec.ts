import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoCardComponent } from './photo-card.component';
import { SharedUiCommonModule } from '@angular-nx-tdd/shared/ui-common';

describe('PhotoCardComponent', () => {
  let component: PhotoCardComponent;
  let fixture: ComponentFixture<PhotoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiCommonModule],
      declarations: [PhotoCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
