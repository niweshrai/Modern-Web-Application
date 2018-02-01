import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-content [arr] = "this.arrStr"></app-content>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrStr: Array<String>;

  constructor() {
    this.arrStr = ["Maharishi University", "Fairfield", "Iowa", "usa"];
  }
}
