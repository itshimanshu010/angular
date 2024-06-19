import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
public name = "Himanshu";

greetUser(){
  return "Hello " + this.name;
}

public myId="testId"
}