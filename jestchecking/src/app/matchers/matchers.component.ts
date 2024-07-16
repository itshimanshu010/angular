import { Component } from '@angular/core';

@Component({
  selector: 'app-matchers',
  templateUrl: './matchers.component.html',
  styleUrls: ['./matchers.component.css']
})
export class MatchersComponent {

  constructor() { }

  compileErrorFn(){
    //throwing new Error with message
    throw new Error('you are not allowed to compile this code');
  }
}
