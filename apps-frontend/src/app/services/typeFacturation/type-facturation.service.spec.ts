import { TestBed } from '@angular/core/testing';

import { TypeFacturationService } from './type-facturation.service';

describe('TypeFacturationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeFacturationService = TestBed.get(TypeFacturationService);
    expect(service).toBeTruthy();
  });
});
