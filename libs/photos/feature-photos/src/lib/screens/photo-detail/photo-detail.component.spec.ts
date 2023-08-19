import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoDetailComponent } from './photo-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PhotosFacade } from '@angular-nx-tdd/photos/domain';
import { of } from 'rxjs';

const mockPhotosFacade = {
  photosList$: of([]),
  loaded$: of(false),
  currentPage$: of(2),
  load: () => undefined,
  saveAsFavorite: () => undefined,
};

describe('PhotoDetailComponent', () => {
  let component: PhotoDetailComponent;
  let fixture: ComponentFixture<PhotoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PhotoDetailComponent],
      providers: [
        {
          provide: PhotosFacade,
          useValue: mockPhotosFacade,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
