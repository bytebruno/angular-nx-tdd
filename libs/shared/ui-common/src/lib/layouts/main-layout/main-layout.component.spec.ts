import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainLayoutComponent } from './main-layout.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent;
  let fixture: ComponentFixture<MainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MainLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a wrapper class', () => {
    const wrapperDiv = fixture.debugElement.query(By.css('.wrapper'));
    expect(wrapperDiv.classes.wrapper).toBe(true);
  });

  it('should have a router-outlet as children of wrapper div', () => {
    const wrapperDiv = fixture.debugElement.query(By.css('.wrapper'));
    const routerOutlet = wrapperDiv.query(By.css('router-outlet'));
    expect(routerOutlet).toBeTruthy();
  });
});
