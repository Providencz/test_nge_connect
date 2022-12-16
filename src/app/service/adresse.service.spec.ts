import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AdresseService } from './adresse.service';

describe('AdresseService', () => {
  let service: AdresseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AdresseService],
    });
    service = TestBed.inject(AdresseService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });
});
