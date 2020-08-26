import { TestBed } from '@angular/core/testing';

import { UserPoolService } from './user-pool.service';

describe('UserPoolService', () => {
  let service: UserPoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
