import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})

export class PlaygroundComponent implements OnInit {

  title = 'Playground';
  pi = Math.PI;
  date = new Date();

  dog = new Dog('Morgan', 11);
  me = new Person('Dariusz', 'Front End Developer');

  showMe() {
    return 'My name is ' + this.me.name + ' and I am a ' + this.me.ocupation + '.';
  }

}

class Dog {
  constructor(public name: string, public age: number) { }
}

class Person {
  constructor(public name: string, public ocupation: string) { }
}
