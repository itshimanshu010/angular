import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { isDepartment } from './department';
@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    <h3>Department List</h3>
    <ul class="items">
      <li (click)="onSelect(department)" *ngFor="let department of departments">
        <span class="badge">{{ department.id }}</span> {{ department.name }}
      </li>
    </ul>
  `,
  styles: [
  ]
})

export class DepartmentListComponent {

  departments:isDepartment[] = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
  ]

  constructor(private router: Router) { }

  onSelect(department:isDepartment){
    this.router.navigate(['/departments', department.id]);
  }
}
