import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url:string ="/assets/data/employees.json"

  constructor(private http:HttpClient) { }
  
  //Example of using HttpClient
  getEmployees():Observable<IEmployee[]> { 
    return this.http.get<IEmployee[]>(this._url);
  }


  //Example of using a static array hard coded data
  getEmployee(){
    return [
      {"id":1, "name":"Andrew", "age":30},
      {"id":2, "name":"Brandon", "age":25},
      {"id":3, "name":"Christina", "age":26},
      {"id":4, "name":"Elena", "age":28},
    ];
  }
}
