import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeErrorListComponent } from './employee-error-list.component';

describe('EmployeeErrorListComponent', () => {
  let component: EmployeeErrorListComponent;
  let fixture: ComponentFixture<EmployeeErrorListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeErrorListComponent]
    });
    fixture = TestBed.createComponent(EmployeeErrorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
