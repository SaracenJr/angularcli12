import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ILoggedUser} from "../../interfaces/loggedUser.interface";

@Component({
    selector: 'app-registration-shell',
    templateUrl: './registration-shell.component.html',
    styleUrls: ['./registration-shell.component.css']
})
export class RegistrationShellComponent implements OnInit {
    public registrationForm : FormGroup
    constructor(
        public authService: AuthService,
        private router: Router,
    ) { }

    ngOnInit(): void {

    }

    regFormReady(form: FormGroup){
        this.registrationForm = form;
    }

    regSave(){
        console.log(this.registrationForm);
        const user : ILoggedUser = {
            name: this.registrationForm.value['userName'],
            password: +this.registrationForm.value.passwordGroup['password']
        }
        console.log(user);
        this.authService.setUser(user).subscribe(_ => {
            this.router.navigate(['login']);
        });
    }
}
