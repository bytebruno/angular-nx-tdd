import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritesComponent } from './favorites.component';
import { Photo, PhotosFacade } from '@angular-nx-tdd/photos/domain';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';

const mockedPhoto: Photo = {
  id: '9',
  author: 'Alejandro Escamilla',
  width: 5000,
  height: 3269,
  url: 'https://unsplash.com/photos/ABDTiLqDhJA',
  download_url: 'https://picsum.photos/id/9/5000/3269',
};

const mockPhotosFacade = {
  photosList$: of([]),
  loaded$: of(false),
  currentPage$: of(2),
  load: () => undefined,
  saveAsFavorite: () => undefined,
};

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: PhotosFacade,
          useValue: mockPhotosFacade,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call router.navigateByUrl when openPhotoDetails is called with a photo', () => {
    const routerSpy = jest.spyOn(router, 'navigateByUrl');
    component.openPhotoDetails(mockedPhoto);
    expect(routerSpy).toHaveBeenCalledWith(`photo/${mockedPhoto.id}`);
  });

  it('should not call router.navigateByUrl when openPhotoDetails is called with null', () => {
    const routerSpy = jest.spyOn(router, 'navigateByUrl');
    component.openPhotoDetails(null);
    expect(routerSpy).not.toHaveBeenCalled();
  });
});
