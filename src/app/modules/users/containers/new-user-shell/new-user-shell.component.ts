import { Component, OnInit } from '@angular/core';

import {PersonService} from "../../services/person.service";
import {personInterface} from "../../interfaces/person.interface";

import { Router} from '@angular/router';

@Component({
  selector: 'app-new-user-shell',
  templateUrl: './new-user-shell.component.html',
  styleUrls: ['./new-user-shell.component.css']
})
export class NewUserShellComponent implements OnInit {

  constructor(
      public persons: PersonService,
      private router: Router
  ) { }

  ngOnInit(): void {
  }
  formSave(form:personInterface){
      console.log(form);
      this.persons.newPerson(form);
      this.router.navigate(['UsersListShellComponent']);
  }

}
