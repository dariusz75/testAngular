import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})

export class PlaygroundComponent implements OnInit {

  title = 'Playground';
  subtitle = 'Property binding';
  inputText = 'Max 5 characters';
  buttonText = 'Change';
  maxLength = 5;
  colorClass = 'color';
  logoUrl = '';

  isDisabled = false;

  change() {
    this.inputText = 'Max 10 characters';
    this.buttonText = 'Changed';
    this.maxLength = 10;
    this.colorClass = 'color2';
    this.logoUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
    this.isDisabled = true;
  }

  ngOnInit() {
  }

}


