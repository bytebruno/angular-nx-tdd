import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoCardComponent } from './photo-card.component';
import { SharedUiCommonModule } from '@angular-nx-tdd/shared/ui-common';
import { By } from '@angular/platform-browser';

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

  it('should emit event when emitClickEvent is called', () => {
    const emitSpy = jest.spyOn(component.clickEventEmitter, 'emit');
    component.emitClickEvent();
    expect(emitSpy).toHaveBeenCalledTimes(1);
  });

  it('should emit event when card is clicked', () => {
    const emitSpy = jest.spyOn(component.clickEventEmitter, 'emit');

    component.photo = {
      id: '9',
      author: 'Alejandro Escamilla',
      width: 5000,
      height: 3269,
      url: 'https://unsplash.com/photos/ABDTiLqDhJA',
      download_url: 'https://picsum.photos/id/9/5000/3269',
    };

    fixture.detectChanges();

    const card = fixture.debugElement.query(By.css('.card'));
    card.nativeElement.click();

    expect(emitSpy).toHaveBeenCalledTimes(1);
    expect(emitSpy).toHaveBeenCalledWith(component.photo);
  });
});
