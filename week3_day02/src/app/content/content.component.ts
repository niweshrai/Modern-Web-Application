import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    <h1>An un-ordered list of array of strings as input </h1>
    <div>
      <ul>
        <li *ngFor="let strArray of arr"> {{strArray}} </li>
      </ul>
    </div>
    <h1>A custom directive "upper" - to convert content of elements to uppercase</h1>
    <div>
      <ul>
        <li *ngFor="let strArray of arr" upper> {{strArray}} </li>
      </ul>
    </div>
    <h1>A custom directive "visibility" - to show or hide contents</h1>
    <div>
      <ul myvisibility [visible] = "this.visible">
        <li *ngFor="let strArray of arr"> {{strArray}} </li>
      </ul>
    </div>
    <h1>A custom directive "mycolor" - to show change of color from array of color</h1>
    <div>
      <ul>
        <li *ngFor="let strArray of arr" mycolor (colorChange) = "colorChange($event)"> {{strArray}} </li>
      </ul>
    </div>
    {{changedColor}}
  `,
  styleUrls: ['./content.component.css'],
  inputs: ['arr']
})
export class ContentComponent implements OnInit {

  visible:Boolean = false;
  changedColor?: string;

  constructor() {}

  ngOnInit() {
  }

  colorChange(color: string) {
    this.changedColor = "The selected color is " + color;
  }

}
