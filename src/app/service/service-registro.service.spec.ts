import { TestBed } from '@angular/core/testing';

import { ServiceRegistroService } from './service-registro.service';

describe('ServiceRegistroService', () => {
  let service: ServiceRegistroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRegistroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
