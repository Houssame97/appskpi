import { TestBed } from '@angular/core/testing';

import { CapabiliteService } from './capabilite.service';

describe('CapabiliteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapabiliteService = TestBed.get(CapabiliteService);
    expect(service).toBeTruthy();
  });
});
