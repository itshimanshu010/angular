import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
  <h2>Department Detail</h2>
    <h3>You selected department with id = {{ departmentId }}</h3>
    <a (click)="goPrevious()">Previous</a> &nbsp;
    <a (click)="goNext()">Next</a>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit{

  public departmentId:number=0;
  constructor(private route:ActivatedRoute, private router :Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.departmentId = parseInt(id,10);
    }
  }

  goPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }
}
