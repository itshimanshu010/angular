import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})


export class TestComponent {
  
    public name = "Himanshu";

    public isDisabled = true;

    public successClass = "text-success";

    public hasError = true;

    public titleStyles = {  
      color: "blue",
      fontStyle: "italic",
      backgroundColor: "yellow"
    }

    public greeting = "";


    greetUser(){
      return "Hello " + this.name;
    }

    clickHere(event : any){
      
      console.log(event);
      this.greeting = "Button Clicked";
    }

    public myId="testId"

    logMessage(value: any){
      console.log(value);
    }

    public fname = "";

    
}