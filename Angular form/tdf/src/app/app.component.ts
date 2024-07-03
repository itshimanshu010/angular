import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 8';
  topics = ['Angular', 'React', 'Vue'];

  topicHasError = true;
  submitted=false;
  errorMsg='';

  constructor(private _enrollmentService:EnrollmentService) { }

  //creating instance of the model
  userModel = new User('Himanshu','hi@gmail.com',9638527411,'default','morning',true);
  //Step 2 is here create a object of the model and pass the value to the model
  //now my creating userModel it will now easy to bind the user model data to our enrollement form
  
  validateTopic(value:string){
    if(value === 'default'){
      this.topicHasError = true;
    }
    else{
      this.topicHasError =false;
    }
  }

  onSubmit(){
    this.submitted=true;
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('Success!',data),
      error=> this.errorMsg=error.statusText
    )
    
  }

}