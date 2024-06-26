import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
    el.nativeElement.style.color = 'black';
    el.nativeElement.style.fontWeight = 'bold';
   }

}
