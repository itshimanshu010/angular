import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 8';
  topics = ['Angular', 'React', 'Vue'];

  //creating instance of the model
  userModel = new User('Himanshu','hi@gmail.com',55555542,'','morning',true);
  //Step 2 is here create a object of the model and pass the value to the model
  //now my creating userModel it will now easy to bind the user model data to our enrollement form
  

}