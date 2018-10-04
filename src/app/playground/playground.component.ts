import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})

export class PlaygroundComponent implements OnInit {

  title = 'Playground';
  subtitle = 'Property and Event binding';
  name = 'ww';
  occupation = 'ee';


  saveName(event) {
    this.name = event.target.value;

  }

  saveOccupation(event) {
    this.occupation = event.target.value;
  }

  ngOnInit() {
  }

}


