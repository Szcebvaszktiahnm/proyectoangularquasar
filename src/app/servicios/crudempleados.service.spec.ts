import { TestBed } from '@angular/core/testing';

import { CrudempleadosService } from './crudempleados.service';

describe('CrudempleadosService', () => {
  let service: CrudempleadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudempleadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
