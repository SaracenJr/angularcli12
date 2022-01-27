import { Component, OnInit } from '@angular/core';

interface iPerson {
    name: string
    age: number
    activated: boolean
}

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

    public persons: iPerson[] = [{name:'kek', age: 11, activated: false},
        {name:'man', age: 41, activated: false},
        {name:'qwerty', age: 123, activated: true}];
  constructor() { }

  ngOnInit(): void {
  }

}
