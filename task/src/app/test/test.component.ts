import { formatDate } from '@angular/common';
import { Component, Pipe, PipeTransform } from '@angular/core';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  public hello = 'Hello World!';

  public din = new Date();
 

}


@Pipe({
  name: 'customPipe'
  
})
export class CustomPipe implements PipeTransform{
  transform(value: string): string {
    return value.toUpperCase();
  }
}

@Pipe({ 
  name: 'dinPipe' 
})

export class DinPipe implements PipeTransform {
  transform(value: Date, format: string): string{
      return formatDate(value, format, 'en-US');
  }
  }

