import { TestBed } from '@angular/core/testing';

import { TypeActiviteService } from './type-activite.service';

describe('TypeActiviteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeActiviteService = TestBed.get(TypeActiviteService);
    expect(service).toBeTruthy();
  });
});
