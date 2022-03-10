import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {IUser} from "../../interfaces/user.interface";

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
    logFormReady(form: FormGroup){
        this.loginForm = form
    }
    login(){
        console.log(this.loginForm);

        const user : IUser = {
            name: this.loginForm.value['userName'],
            password: this.loginForm.value['password']
        };
        console.log(user);
        this.authService.checkUser(user).subscribe(data => {
            if(data) {
                this.authService.loginUser(user);
                this.router.navigate(['Users']);
            }else {
                    return;
                }
        })
    }
}
