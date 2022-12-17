import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [{provide: Router, useValue: routerSpy}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Création du composant de Login', () => {
    expect(component).toBeTruthy();
  });

  it('sould call the Router to navigate', () => {
    component.submitForm();
    let spy = routerSpy.navigateByUrl as jasmine.Spy;
    let navArgs = spy.calls.first().args[0];

    expect(navArgs).withContext('should navigate to adresse page').toBe('/adresse');
  });

});
