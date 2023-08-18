import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoGridComponent } from './photo-grid.component';
import { Photo } from '@angular-nx-tdd/photos/domain';

const mockedPhoto: Photo = {
  id: '9',
  author: 'Alejandro Escamilla',
  width: 5000,
  height: 3269,
  url: 'https://unsplash.com/photos/ABDTiLqDhJA',
  download_url: 'https://picsum.photos/id/9/5000/3269',
};

describe('PhotoGridComponent', () => {
  let component: PhotoGridComponent;
  let fixture: ComponentFixture<PhotoGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoGridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event when cardClicked is called', () => {
    const emitSpy = jest.spyOn(component.clickEventEmitter, 'emit');
    component.cardClicked(mockedPhoto);
    expect(emitSpy).toHaveBeenCalledTimes(1);
    expect(emitSpy).toHaveBeenCalledWith(mockedPhoto);
  });
});
