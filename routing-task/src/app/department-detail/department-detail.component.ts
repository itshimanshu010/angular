import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
  <h2>Department Detail</h2>
    <h3>You selected department with id = {{ departmentId }}</h3>
    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit{

  public departmentId:any;
  constructor(private route:ActivatedRoute, private router :Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.departmentId = id;
  }

  goPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['/department', previousId]);
  }

  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['/department', nextId]);
  }
}
