import { TestBed } from '@angular/core/testing';

import { DepositPlanService } from './deposit-plan.service';

describe('DepositPlanService', () => {
  let service: DepositPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepositPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
