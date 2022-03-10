import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersListShellComponent } from './modules/users/containers/users-list-shell/users-list-shell.component';
import {NewUserShellComponent} from './modules/users/containers/new-user-shell/new-user-shell.component'
import {VehicleListShellComponent} from "./modules/vehicles/containers/vehicle-list-shell/vehicle-list-shell.component";
import {EditUserShellComponent} from "./modules/users/containers/edit-user-shell/edit-user-shell.component";
import {RegistrationShellComponent} from "./modules/authorization/containers/registration-shell/registration-shell.component";
import {LoginShellComponent} from "./modules/authorization/containers/login-shell/login-shell.component";
import {ExitEditPageGuard} from "./modules/users/exit-edit-page.guard";


 const routes: Routes = [
    { path: '', redirectTo: '/registration', pathMatch: 'full'},
    {path: 'home', redirectTo: '/Users', pathMatch: 'full' },
    { path: 'Users', component: UsersListShellComponent },
    { path: 'New-UserInterface', component: NewUserShellComponent },
    { path: 'Vehicles', component: VehicleListShellComponent },
    { path: 'Edit-UserInterface/:id', component: EditUserShellComponent, canDeactivate:[ExitEditPageGuard] },
    { path: 'registration', component: RegistrationShellComponent},
    { path: 'login', component: LoginShellComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
