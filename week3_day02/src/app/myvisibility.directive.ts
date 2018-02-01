import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[myvisibility]'
})
export class MyvisibilityDirective {

  constructor() { }

  @HostBinding('style.display') display;
  @Input() visible: Boolean;

  ngOnInit() { 
    if(this.visible) {
      this.display = 'block';
    }else {
      this.display = 'none';
    }
  }

}