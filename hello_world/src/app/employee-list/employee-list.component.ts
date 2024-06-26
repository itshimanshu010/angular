import { Component, OnInit} from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  public employees:any = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(){
    //this is done through http request
   this._employeeService.getEmployees()
   .subscribe(data => this.employees = data);
  }
  //3rd step is to subscribe to the observable
}
