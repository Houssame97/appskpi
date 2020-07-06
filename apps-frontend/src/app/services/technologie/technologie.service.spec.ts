import { TestBed } from '@angular/core/testing';

import { TechnologieService } from './technologie.service';

describe('TechnologieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TechnologieService = TestBed.get(TechnologieService);
    expect(service).toBeTruthy();
  });
});
