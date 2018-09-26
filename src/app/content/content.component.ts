import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `<app-item></app-item> <app-item></app-item> <app-item></app-item> <app-item></app-item>`,
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  title = 'Content Component';

  constructor() { }

  ngOnInit() {
  }

}
