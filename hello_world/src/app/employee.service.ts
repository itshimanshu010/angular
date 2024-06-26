import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //Example of using HttpClient

  private _url: string ="/assets/data/employees.json"
  private _Errorurl: string ="/assets/data/employees1.json"
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> { 
    return this.http.get<IEmployee[]>(this._url);
  }                  //Here 1st step of get request is done.
  //Now we need to cast the observable which we receive as response to an employee array.
  //get method returns observable but in our we need cast into a format that represents an array of employees.
  //now first create employee inteface in employee.ts file.
  // now add type to the get request get<IEmployee[]>


  //Example of using a static array hard coded data
  getEmployee(){
    return [
      {"id":1, "name":"Andrew", "age":30},
      {"id":2, "name":"Brandon", "age":25},
      {"id":3, "name":"Christina", "age":26},
      {"id":4, "name":"Elena", "age":28},
    ];
  }

  //Example of Handling HTTP Errors
  getEmployeesError(): Observable<IEmployee[]> { 
    return this.http.get<IEmployee[]>(this._Errorurl)
    .pipe(
      catchError(this.errorHandler)
    );      
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
  //this throws out a message if there is an error in the http request.
}