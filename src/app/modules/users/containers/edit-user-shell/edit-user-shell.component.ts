import { Component, OnInit } from '@angular/core';

import {PersonService} from "../../services/person.service";
import {IPerson} from "../../interfaces/person.interface";

import {ActivatedRoute, Router} from '@angular/router';
import {IInfoPerson} from "../../interfaces/personInfo.interface";
import {IAddressesPerson} from "../../interfaces/personAddresses.interface";
import {FormArray, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
import {AuthService} from "../../../authorization/services/auth.service";

@Component({
  selector: 'app-edit-user-shell',
  templateUrl: './edit-user-shell.component.html',
  styleUrls: ['./edit-user-shell.component.css']
})

export class EditUserShellComponent implements OnInit {
    public person : IPerson;
    private personForm: FormGroup | undefined;
    private addressForm: FormArray | undefined;
    private routeSub: Subscription;

    constructor(
        public personService: PersonService,
        public authService: AuthService,
        private router: Router,
        private route: ActivatedRoute,

    ) { }

    ngOnInit(): void {

        this.routeSub = this.route.params.subscribe(params => {
            this.personService.getPersonById(params['id']).subscribe(person => {
                this.person = person;
            });
        });
    }

    personFormReady(form: FormGroup){
        this.personForm = form;
    }
    addressFormReady(form: FormArray){
        this.addressForm = form;
    }

    formSave(): void{

        if (this.personForm?.invalid) {
            this.personForm?.markAllAsTouched();
            return;
        }
        if (this.addressForm?.invalid) {
            this.addressForm?.markAllAsTouched();
            return;
        }
        console.log('add', this.addressForm.value);
        let form : IPerson = {
            ...this.personForm?.value,
            addresses: this.addressForm.value,
            // ...this.addressForm?.value
        }
        this.personService.editPerson(form, this.person.id)
            .subscribe(() => {
                this.router.navigate(['Users']);
            });
    }
    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
