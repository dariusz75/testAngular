import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})

export class PlaygroundComponent implements OnInit {

  title = 'Playground';
  subtitle = 'Event binding';
  inputText = 'Max 5 characters';
  buttonText = 'Change';
  maxLength = 5;
  colorClass = 'color';
  logoUrl = '';
  x = '';
  y = '';

  isDisabled = false;

  onFocus() {
    this.colorClass = 'color2';
  }

  onDblClick() {
    this.colorClass = 'color3';
  }

  onPaste() {
    this.colorClass = 'color4';
  }

  onCopy() {
    this.colorClass = 'color';
  }

  onMouseMove(event) {
    this.x = event.clientX;
    this.y = event.clientY;
  }

  ngOnInit() {
  }

}


