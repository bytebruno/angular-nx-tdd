import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoCardComponent } from './photo-card.component';
import { SharedUiCommonModule } from '@angular-nx-tdd/shared/ui-common';
import { By } from '@angular/platform-browser';
import { Photo } from '@angular-nx-tdd/photos/domain';
import { RouterTestingModule } from '@angular/router/testing';

const mockedPhoto: Photo = {
  id: '9',
  author: 'Alejandro Escamilla',
  width: 5000,
  height: 3269,
  url: 'https://unsplash.com/photos/ABDTiLqDhJA',
  download_url: 'download_url',
  lite_download_url: 'lite_download_url',
};

describe('PhotoCardComponent', () => {
  let component: PhotoCardComponent;
  let fixture: ComponentFixture<PhotoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiCommonModule, RouterTestingModule],
      declarations: [PhotoCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event when emitClickEvent is called', () => {
    const emitSpy = jest.spyOn(component.clickEventEmitter, 'emit');
    component.emitClickEvent();
    expect(emitSpy).toHaveBeenCalledTimes(1);
  });

  it('should emit event when card is clicked', () => {
    const emitSpy = jest.spyOn(component.clickEventEmitter, 'emit');

    component.photo = mockedPhoto;
    fixture.detectChanges();

    const card = fixture.debugElement.query(By.css('mat-card'));
    card.nativeElement.click();

    expect(emitSpy).toHaveBeenCalledTimes(1);
    expect(emitSpy).toHaveBeenCalledWith(component.photo);
  });

  it('should use lite_download_url if useFullResolution is false', () => {
    component.photo = mockedPhoto;
    component.useFullResolution = false;
    fixture.detectChanges();

    const image = fixture.debugElement.query(By.css('.mat-mdc-card-image'));
    expect(image.nativeElement.src).toContain(mockedPhoto.lite_download_url);
  });

  it('should use download_url if useFullResolution is true', () => {
    component.photo = mockedPhoto;
    component.useFullResolution = true;
    fixture.detectChanges();

    const image = fixture.debugElement.query(By.css('.mat-mdc-card-image'));
    expect(image.nativeElement.src).toContain(mockedPhoto.download_url);
  });
});
