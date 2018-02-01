import { Component } from '@angular/core';

@Component({  
  selector: 'app-root',
  template: `
  <app-counter [counterValue] = "this.counterValue" (counterChange) = "counterChange($event)"  [counterMessage] = "this.componentCounterValue" ></app-counter><br/>
  <input type = "number" (keyup)="onKey($event.target.value)"/>`,
  styles: ['']
})

export class AppComponent {
  componentCounterValue?:string;
  counterValue: number = 1;

  counterChange(counter: number){
    this.componentCounterValue = "Component Counter Value = "+counter;
  }

  onKey(data){
    let intVal = parseInt(data);
    if(isNaN(intVal)) return false;
    else this.counterValue = intVal;
  }
}
