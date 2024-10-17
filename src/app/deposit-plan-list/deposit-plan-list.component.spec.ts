import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositPlanListComponent } from './deposit-plan-list.component';

describe('DepositPlanListComponent', () => {
  let component: DepositPlanListComponent;
  let fixture: ComponentFixture<DepositPlanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositPlanListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositPlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
