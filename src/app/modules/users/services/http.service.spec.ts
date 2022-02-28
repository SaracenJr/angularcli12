import { TestBed } from '@angular/core/testing';

import { Http.ServiceService } from './http.service.service';

describe('Http.ServiceService', () => {
  let service: Http.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Http.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
