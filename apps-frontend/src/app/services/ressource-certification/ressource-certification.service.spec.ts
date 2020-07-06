import { TestBed } from '@angular/core/testing';

import { RessourceCertificationService } from './ressource-certification.service';

describe('RessourceCertificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RessourceCertificationService = TestBed.get(RessourceCertificationService);
    expect(service).toBeTruthy();
  });
});
