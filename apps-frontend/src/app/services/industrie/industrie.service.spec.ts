import { TestBed } from '@angular/core/testing';

import { IndustrieService } from './industrie.service';

describe('IndustrieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndustrieService = TestBed.get(IndustrieService);
    expect(service).toBeTruthy();
  });
});
