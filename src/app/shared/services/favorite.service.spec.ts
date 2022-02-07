import { TestBed } from '@angular/core/testing';

import { Favorite.ServiceService } from './favorite.service.service';

describe('Favorite.ServiceService', () => {
  let service: Favorite.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Favorite.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
