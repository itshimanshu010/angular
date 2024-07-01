import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { isDepartment } from './department';
@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    <h3>Department List</h3>
    <ul class="items">
      <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
        <span class="badge">{{ department.id }}</span> {{ department.name }}
      </li>
    </ul>
  `,
  styles: [
  ]
})

export class DepartmentListComponent implements OnInit{

  departments:isDepartment[] = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
  ]
  public selectedId:number=0;
  constructor(private router: Router, private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => { 
      let id = params.get('id'); 
      if(id){
          this.selectedId = parseInt(id,10);
        }
    })
  }
  onSelect(department:isDepartment){
    // this.router.navigate(['/departments', department.id]);

    this.router.navigate([department.id], {relativeTo: this.route})
  }
  //to highlight the selected department
  //Optional Route Parameter
  isSelected(department:isDepartment){
    return department.id === this.selectedId;
  }
}
