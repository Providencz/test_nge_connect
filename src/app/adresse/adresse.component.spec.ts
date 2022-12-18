import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AdresseComponent } from './adresse.component';
import { AdresseService } from '../service/adresse.service';

describe('AdresseComponent', () => {
  let component: AdresseComponent;
  let adresseService: AdresseService;
  let fixture: ComponentFixture<AdresseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, MatSnackBarModule],
      declarations: [AdresseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdresseComponent);
    component = fixture.componentInstance;
    adresseService = TestBed.inject(AdresseService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
