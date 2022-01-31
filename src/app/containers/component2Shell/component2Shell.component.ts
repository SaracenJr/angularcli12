import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2Shell.component.html',
  styleUrls: ['./component2Shell.component.css']
})
export class Component2ShellComponent implements OnInit {
    public textInput = '';
  constructor() { }

  ngOnInit(): void {
  }

}

