import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotosComponent } from './photos.component';
import { PhotosFacade } from '@angular-nx-tdd/photos/domain';
import { of } from 'rxjs';
import { SharedUiCommonModule } from '@angular-nx-tdd/shared/ui-common';
import { PhotoGridComponent } from '../../components/photo-grid/photo-grid.component';
import { SharedUtilUiModule } from '@angular-nx-tdd/shared/util-ui';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;
  let mockPhotosFacade: Partial<PhotosFacade>;

  beforeEach(async () => {
    window.IntersectionObserver = jest.fn().mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });

    mockPhotosFacade = {
      photosList$: of([]),
      loaded$: of(false),
      load: () => undefined,
    };

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call photosFacade.load() on ngOnInit', () => {
    jest.spyOn(mockPhotosFacade, 'load');
    component.ngOnInit();
    expect(mockPhotosFacade.load).toHaveBeenCalled();
  });

  it('should subscribe to loaded$ on ngOnInit', () => {
    jest.spyOn(mockPhotosFacade.loaded$, 'subscribe');
    component.ngOnInit();
    expect(mockPhotosFacade.loaded$.subscribe).toHaveBeenCalled();
  });

  it('should unsubscribe on ngOnDestroy', () => {
    const unsubscribeSpy = jest.spyOn(
      component.loadedSubscription,
      'unsubscribe'
    );

    component.ngOnDestroy();

    expect(unsubscribeSpy).toHaveBeenCalled();
  });

  it('should call photosFacade.load() on onScroll if loaded is true', () => {
    jest.spyOn(mockPhotosFacade, 'load');
    component.loaded = true;
    component.onScroll();
    expect(mockPhotosFacade.load).toHaveBeenCalled();
  });

  it('should not call photosFacade.load() on onScroll if loaded is false', () => {
    jest.spyOn(mockPhotosFacade, 'load');
    component.loaded = false;
    component.onScroll();
    expect(mockPhotosFacade.load).not.toHaveBeenCalled();
  });
});
