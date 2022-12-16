import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AdresseComponent } from './adresse.component';

describe('AdresseComponent', () => {
  let component: AdresseComponent;
  let fixture: ComponentFixture<AdresseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, MatSnackBarModule],
      declarations: [AdresseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
