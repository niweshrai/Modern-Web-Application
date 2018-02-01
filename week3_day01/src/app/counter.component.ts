import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>My Counter</h1>
  <p><button (click) = "decrease()">-</button>
  {{counterValue}}
   <button (click) = "increase()">+</button> 
   </p>
   {{counterMessage}}
`,
  styleUrls: []
})
export class CounterComponent {

  @Input() counterValue: number;

  @Output() counterChange = new EventEmitter<number>();

  @Input() counterMessage: string ="";

  constructor() {}
  
  increase() {
    this.counterValue = this.counterValue + 1;
    this.counterChange.emit(this.counterValue);
    return false;
  }
  decrease() {
    this.counterValue = this.counterValue - 1;
    this.counterChange.emit(this.counterValue);
    return false;
  }

}
