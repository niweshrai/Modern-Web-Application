import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'guards-component',
  template: `
    <h2>
      Error!!
    </h2>
    <p> Not Found!!!Roll Back </p>

    <button class="btn btn-alert" (click)="onNavigate()">Toggle Home</button>
  `
})
export class GuardsComponent {

  constructor(private router: Router) {}

  onNavigate() {
      this.router.navigate(['/']);
  }

}
