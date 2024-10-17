import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationResultComponent } from './allocation-result.component';

describe('AllocationResultComponent', () => {
  let component: AllocationResultComponent;
  let fixture: ComponentFixture<AllocationResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocationResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
