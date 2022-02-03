import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';
import {personInterface} from "../../interfaces/person.interface";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
    @Output() formSave = new EventEmitter<personInterface>();
    profileForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        age: new FormControl(undefined, Validators.required),
        company: new FormControl(''),
        department: new FormControl(''),
    });

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
      console.log(this.profileForm.value);
      this.formSave.emit(this.profileForm.value);
  }

}
