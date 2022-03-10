import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    @Output() formReg = new EventEmitter<FormGroup>();

    public registrationForm: FormGroup = new FormGroup({
        userName: new FormControl('', Validators.required),
        passwordGroup: new FormGroup({
            password: new FormControl(null, Validators.required),
            confirmPassword: new FormControl(null, Validators.required),
        }, this.checkPassword)
    });

    constructor() { }

    ngOnInit(): void {
        this.formReg.emit(this.registrationForm);
    }

    checkPassword(FormGroup: FormGroup): ValidationErrors | null {
        let password = FormGroup.get('password').value;
        let confirm = FormGroup.get('confirmPassword').value;
        return password === confirm ? null : {notMatch: true};
    }

}
