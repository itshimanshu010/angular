import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
  <h2>Department Detail</h2>
    <h3>You selected department with id = {{ departmentId }}</h3>
    <router-outlet></router-outlet>

    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>

    <p>
      <button (click)="goPrevious()">Previous</button> 
      <button (click)="goNext()">Next</button>
    </p>
    
   
    
    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit{

  public departmentId:number=0;
  constructor(private route:ActivatedRoute, private router :Router) { }

  ngOnInit(): void {

    //due to drawback of snapshot that we can't navigate to the same component with different id
    // let id = this.route.snapshot.paramMap.get('id');
    // if(id){
    //   this.departmentId = parseInt(id,10);
    // }

    //we use paramMap observable to navigate to the same component with different id
    this.route.paramMap.subscribe((params: ParamMap) => { 
      let id = params.get('id'); 
      if(id){
          this.departmentId = parseInt(id,10);
        }
    })
  
  }

  goPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  gotoDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments', {id: selectedId}]);
    this.router.navigate(['../', {id:selectedId}],{relativeTo: this.route});
  }

  showOverview(){
    this.router.navigate(['overview'],{relativeTo: this.route});
  }

  showContact(){
    this.router.navigate(['contact'],{relativeTo: this.route});
  }
}
