import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthShellComponent} from "../../containers/auth-shell/auth-shell.component";
import {RegistrationShellComponent} from "./containers/registration-shell/registration-shell.component";
import {LoginShellComponent} from "./containers/login-shell/login-shell.component";
import {UsersShellComponent} from "../../containers/users-shell/users-shell.component";


const routes: Routes = [
    { path: '', component: AuthShellComponent, children: [
            { path: 'registration', component: RegistrationShellComponent},
            { path: 'login', component: LoginShellComponent},
            { path: '', redirectTo: 'login', pathMatch: 'full' }
      ]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
