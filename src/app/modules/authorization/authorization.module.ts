import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegistrationShellComponent } from './containers/registration-shell/registration-shell.component';
import { LoginShellComponent } from './containers/login-shell/login-shell.component';
import {SharedModule} from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        LoginComponent,
        RegistrationComponent,
        RegistrationShellComponent,
        LoginShellComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [
        SharedModule,
        RegistrationShellComponent,
        LoginShellComponent
    ]
})
export class AuthorizationModule { }
