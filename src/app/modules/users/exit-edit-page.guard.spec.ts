import { TestBed } from '@angular/core/testing';

import { ExitEditPageGuard } from './exit-edit-page.guard';

describe('ExitEditPageGuard', () => {
  let guard: ExitEditPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExitEditPageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
