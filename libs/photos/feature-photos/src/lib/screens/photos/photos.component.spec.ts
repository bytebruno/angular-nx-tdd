import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotosComponent } from './photos.component';
import { Photo, PhotosFacade } from '@angular-nx-tdd/photos/domain';
import { of } from 'rxjs';
import { SharedUiCommonModule } from '@angular-nx-tdd/shared/ui-common';
import { PhotoGridComponent } from '../../components/photo-grid/photo-grid.component';
import { SharedUtilUiModule } from '@angular-nx-tdd/shared/util-ui';

const mockPhotosFacade = {
  photosList$: of([]),
  loaded$: of(false),
  currentPage$: of(2),
  load: () => undefined,
  saveAsFavorite: () => undefined,
};

const mockedPhoto: Photo = {
  id: '9',
  author: 'Alejandro Escamilla',
  width: 5000,
  height: 3269,
  url: 'https://unsplash.com/photos/ABDTiLqDhJA',
  download_url: 'https://picsum.photos/id/9/5000/3269',
};

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;
  const loadSpy = jest.spyOn(mockPhotosFacade, 'load');

  beforeEach(async () => {
    window.IntersectionObserver = jest.fn().mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });

    await TestBed.configureTestingModule({
      imports: [SharedUiCommonModule, SharedUtilUiModule],
      declarations: [PhotosComponent, PhotoGridComponent, PhotosComponent],
      providers: [
        {
          provide: PhotosFacade,
          useValue: mockPhotosFacade,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    loadSpy.mockClear();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not call photosFacade.load() if currentPage !== 1 on ngOnInit', () => {
    component.currentPage$ = of(2);
    component.ngOnInit();
    expect(mockPhotosFacade.load).not.toHaveBeenCalled();
  });

  it('should call photosFacade.load() if currentPage === 1 on ngOnInit', () => {
    component.currentPage$ = of(1);
    component.ngOnInit();
    expect(mockPhotosFacade.load).toHaveBeenCalled();
  });

  it('should subscribe to loaded$ on ngOnInit', () => {
    const spy = jest.spyOn(mockPhotosFacade.loaded$, 'subscribe');
    component.ngOnInit();
    expect(mockPhotosFacade.loaded$.subscribe).toHaveBeenCalled();
    spy.mockClear();
  });

  it('should call photosFacade.load() on onScroll if loaded is true', () => {
    component.loaded = true;
    component.onScroll();
    expect(mockPhotosFacade.load).toHaveBeenCalled();
  });

  it('should call photosFacade.load() only on init and not on onScroll if loaded is false ', () => {
    component.loaded = false;
    component.onScroll();
    expect(mockPhotosFacade.load).not.toHaveBeenCalled();
  });

  it('should not dispatch saveAsFavorite if photo is null', () => {
    const spy = jest.spyOn(mockPhotosFacade, 'saveAsFavorite');
    component.saveAsFavorite(null);
    expect(mockPhotosFacade.saveAsFavorite).not.toHaveBeenCalled();
    spy.mockClear();
  });

  it('should dispatch saveAsFavorite if photo is not null', () => {
    const spy = jest.spyOn(mockPhotosFacade, 'saveAsFavorite');
    component.saveAsFavorite(mockedPhoto);
    expect(mockPhotosFacade.saveAsFavorite).toHaveBeenCalledTimes(1);
    spy.mockClear();
  });
});
