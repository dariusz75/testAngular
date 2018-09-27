import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})

export class PlaygroundComponent implements OnInit {

  title = 'Playground';
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  dogs = [{ name: 'Morgan', age: 2 }, { name: 'Guiness', age: 4 }, { name: 'Rex', age: 6 }];

  ngOnInit() {
  }

}


