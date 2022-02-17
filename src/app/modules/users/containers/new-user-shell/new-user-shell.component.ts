import { Component, OnInit } from '@angular/core';

import {PersonService} from "../../services/person.service";
import {IPerson} from "../../interfaces/person.interface";

import { Router} from '@angular/router';
import {IInfoPerson} from "../../interfaces/personInfo.interface";
import {IAddressesPerson} from "../../interfaces/personAddresses.interface";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-new-user-shell',
  templateUrl: './new-user-shell.component.html',
  styleUrls: ['./new-user-shell.component.css']
})
export class NewUserShellComponent implements OnInit {

    private personForm: FormGroup | undefined;
    private addressForm: FormGroup | undefined;

  constructor(
      public personService: PersonService,
      private router: Router,
  ) { }

  ngOnInit(): void {
  }
  personFormReady(form: FormGroup){
      this.personForm = form;
      console.log(this.personForm);
  }
  addressFormReady(form: FormGroup){
      this.addressForm = form;
      console.log(this.addressForm);
  }

  formSave(){
      if (this.personForm?.invalid) {
          this.personForm?.markAllAsTouched();
          return;
      }
      let form : IPerson = {
          ...this.personForm?.value,
          ...this.addressForm?.value
      }
     // console.log(form);
      this.personService.newPerson(form)
          .subscribe(() => {
              console.log('dsfghj');
              this.router.navigate(['Users']);
          });
  }

}
