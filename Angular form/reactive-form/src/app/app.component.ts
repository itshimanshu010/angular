import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './shared/userName.validator';
import { PasswordValidator } from './shared/password.validator';
// import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'reactive-form';
  constructor(private fb:FormBuilder) { }
  
  get userName(){
    return this.registrationForm.get('userName');
  }


  registrationForm = this.fb.group({
    userName: ['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/password/)]],
    password:[''],
    confirmPassword:[''],
    address: this.fb.group({
      city:[''],
      state:[''],
      postalCode:['']
    })
  },{validator: PasswordValidator})

  //Example of using Formgroup and formcontrol instead of form builder
  // registrationForm = new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });

  loadApiData(){
    this.registrationForm.patchValue({
      userName: 'Himanshu',
      password: 'test', 
      confirmPassword: 'test',
      
    })
  }
}
