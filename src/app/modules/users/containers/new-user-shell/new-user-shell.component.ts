import { Component, OnInit } from '@angular/core';

import {PersonService} from "../../services/person.service";
import {IPerson} from "../../interfaces/person.interface";

import { Router} from '@angular/router';
import {IInfoPerson} from "../../interfaces/personInfo.interface";
import {IAddressesPerson} from "../../interfaces/personAddresses.interface";
import {FormArray, FormGroup} from "@angular/forms";
import {IAddress} from "../../interfaces/address.interface";

@Component({
  selector: 'app-new-user-shell',
  templateUrl: './new-user-shell.component.html',
  styleUrls: ['./new-user-shell.component.css']
})
export class NewUserShellComponent implements OnInit {

    private personForm: FormGroup | undefined;
    private addressForm: FormArray | undefined;

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
  addressFormReady(form: FormArray){
      this.addressForm = form;
      console.log(this.addressForm);
  }

  formSave(){
      console.log('address: ', this.addressForm);
      const addresses : IAddress[] = []
      this.addressForm.controls.forEach(address => {
          console.log('this: ', address);
          //addresses.push({addressLine: address.value.addressLine, city: address.value.city, zip: address.value.zip});
          addresses.push(address.value);
      });

      if (this.personForm?.invalid) {
          this.personForm?.markAllAsTouched();
          return;
      }
      let form : IPerson = {
          ...this.personForm?.value,
          addresses: addresses,
         // ...this.addressForm?.value
      }
      console.log(form);
      this.personService.newPerson(form)
          .subscribe(() => {
              console.log('dsfghj');
              this.router.navigate(['Users']);
          });
  }

}
