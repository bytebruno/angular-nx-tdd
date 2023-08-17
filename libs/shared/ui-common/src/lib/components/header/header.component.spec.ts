import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { MaterialModule } from '../../material.module';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
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
});
