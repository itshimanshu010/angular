import { Component,EventEmitter,Input, Output } from '@angular/core';

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

    displayName= true;

    public color = "aqua";

    public rang = ["red", "blue", "green", "yellow"]

    @Input() public parentData:any;

    @Output() public childEvent = new EventEmitter();

    fireEvent(){
      this.childEvent.emit('Hey Himanshu Jaiswal')
    }


    // service
    public persons =[
      { "id": 1,"name": "Rishu", "age": 25},
      { "id": 2,"name": "Himanshu", "age": 26},
      { "id": 3,"name": "Rahul", "age": 27},
      { "id": 4,"name": "Rohit", "age": 28},
      { "id": 5,"name": "Raj", "age": 29}
    ]       
}