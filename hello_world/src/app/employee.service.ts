import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){ 
    return[
      { "id": 1,"name": "Rishu", "age": 25},
      { "id": 2,"name": "Himanshu", "age": 26},
      { "id": 3,"name": "Rahul", "age": 27},
      { "id": 4,"name": "Rohit", "age": 28},
      { "id": 5,"name": "Raj", "age": 29}
    ]
  }
}
