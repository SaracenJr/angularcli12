import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ILoggedUser} from "../../interfaces/loggedUser.interface";

@Component({
    selector: 'app-login-shell',
    templateUrl: './login-shell.component.html',
    styleUrls: ['./login-shell.component.css']
})
export class LoginShellComponent implements OnInit {
    public loginForm : FormGroup
    constructor(
        public authService: AuthService,
        private router: Router,
    ) { }

    ngOnInit(): void {

    }
    logFormReady(form: FormGroup) : void{
        this.loginForm = form
    }

    login() : void{
        const user : ILoggedUser = {
            name: this.loginForm.value['userName'],
            password: +this.loginForm.value['password']
        };

        this.authService.checkUser(user).subscribe(check => {
            if(check) {
                this.authService.setLoggedUser(user).subscribe(_ => {
                    this.router.navigate(['Users']);
                });
            }else return;
        });
    }
}
