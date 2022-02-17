import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors} from '@angular/forms';
import { Validators } from '@angular/forms';
import {IPerson} from "../../interfaces/person.interface";
import {PersonService} from "../../services/person.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {IInfoPerson} from "../../interfaces/personInfo.interface";


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
    @Output() formReady = new EventEmitter<FormGroup>();
    profileForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        age: new FormControl( null,[Validators.required, Validators.min(15), Validators.max(100)]),
        company: new FormControl('', [Validators.required, Validators.minLength(6)]),
        department: new FormControl('', [Validators.required, Validators.maxLength(35)]),
        email: new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@gmail.com")],
            [this.personService.uniqueEmailValidator()]),
        gender: new FormControl('male', ),
    });
    //Validators.required
  constructor(
      public personService: PersonService,
  ) { }

  ngOnInit(): void {
      this.formReady.emit(this.profileForm);
  }
  /*onSubmit(){
      console.log(this.profileForm.value);
      this.formSave.emit(this.profileForm.value);
  }
*/
}
