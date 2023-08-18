import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { MaterialModule } from '../../material.module';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule.withRoutes([
          { path: 'photos', component: HeaderComponent },
          { path: 'favorites', component: HeaderComponent },
        ]),
        NoopAnimationsModule,
      ],
      declarations: [HeaderComponent],
    })
      .overrideComponent(HeaderComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have photos and favorites buttons for redirection purposes', () => {
    const buttons = fixture.debugElement.queryAll(By.css('.mdc-button__label'));
    expect(buttons[0].nativeElement.innerHTML.trim()).toBe('Photos');
    expect(buttons[1].nativeElement.innerHTML.trim()).toBe('Favorites');
  });

  it('should highlight first button if url is /photos', () => {
    jest
      .spyOn(component, 'currentUrl', 'get')
      .mockImplementation(() => '/photos');
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons[0].classes['mat-accent']).toBe(true);
    expect(buttons[1].classes['mat-accent']).toBe(undefined);
  });

  it('should highlight second button if url is /favorites', () => {
    jest
      .spyOn(component, 'currentUrl', 'get')
      .mockImplementation(() => '/favorites');
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons[0].classes['mat-accent']).toBe(undefined);
    expect(buttons[1].classes['mat-accent']).toBe(true);
  });

  it('should redirect to photos on button click', fakeAsync(() => {
    const photosBtn = fixture.debugElement.queryAll(By.css('button'))[0];
    photosBtn.nativeElement.click();
    tick();
    expect(router.url).toBe('/photos');
  }));

  it('should redirect to favorites on button click', fakeAsync(() => {
    const favBtn = fixture.debugElement.queryAll(By.css('button'))[1];
    favBtn.nativeElement.click();
    tick();
    expect(router.url).toBe('/favorites');
  }));
});
