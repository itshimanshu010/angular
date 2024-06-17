import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../shared/password-match.directives';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/auth';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = this.fb.group({
    fullName: ['',[Validators.required,Validators.pattern(/^[a-zA-Z ]+(?: [a-zA-Z]+)*$/)]],
    email: ['',[Validators.required,Validators.email,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
    password: ['',[Validators.required, Validators.minLength(8)]],
    confirmPassword: ['',Validators.required],
    gender: ['', Validators.required],
    mobileNumber: ['', [Validators.required, Validators.pattern(/^[6-9]{1}[0-9]{9}$/)]],
 
  },{ 
    validators: passwordMatchValidator
   });

  constructor(
    private fb: FormBuilder,
    private authService:AuthService,
    private messageService: MessageService,
    private router:Router
  ){}

  get fullName(){
    return this.registerForm.controls['fullName'];
  }

  get email(){
    return this.registerForm.controls['email'];
  }

  get password(){
    return this.registerForm.controls['password'];
  }

  get confirmPassword(){
    return this.registerForm.controls['confirmPassword'];
  } 

  get gender() {
    return this.registerForm.controls['gender'];
  }

  get mobileNumber() {
    return this.registerForm.controls['mobileNumber'];
  }


  submitDetails(){
    const postData = {...this.registerForm.value};
    delete postData.confirmPassword;
    this.authService.registerUser(postData as User).subscribe(
      response=>{
        console.log(response);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Register Successfully' });
        this.router.navigate(['/login']);
      },
      error=>{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something Went Wrong' });

      }
    )

  }

}
