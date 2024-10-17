import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDepositPlanComponent } from './create-deposit-plan.component';

describe('CreateDepositPlanComponent', () => {
  let component: CreateDepositPlanComponent;
  let fixture: ComponentFixture<CreateDepositPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDepositPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDepositPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
