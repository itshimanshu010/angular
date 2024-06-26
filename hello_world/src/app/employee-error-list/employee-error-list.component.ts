import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-error-list',
  templateUrl: './employee-error-list.component.html',
  styleUrls: ['./employee-error-list.component.css']
})
export class EmployeeErrorListComponent {
  public employees:any = [];

  public errorMsg:any;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(){
    //this is done through http request
   this._employeeService.getEmployeesError()
   .subscribe(data => this.employees = data,
              error => this.errorMsg = error);
  }
}
