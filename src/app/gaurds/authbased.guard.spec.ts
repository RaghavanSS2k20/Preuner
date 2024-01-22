import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authbasedGuard } from './authbased.guard';

describe('authbasedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authbasedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
