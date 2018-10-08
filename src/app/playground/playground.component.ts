import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})

export class PlaygroundComponent implements OnInit {

  title = 'Playground';
  subtitle = 'Sending data to child component - @input';

  tasksList = ['task 1', 'task 2', 'task 3', 'task 4'];

  ngOnInit() {
  }

}


