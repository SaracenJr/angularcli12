import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersListShellComponent } from './modules/users/containers/users-list-shell/users-list-shell.component';
import {NewUserShellComponent} from './modules/users/containers/new-user-shell/new-user-shell.component'
import {VehicleListShellComponent} from "./modules/vehicles/containers/vehicle-list-shell/vehicle-list-shell.component";
import {EditUserShellComponent} from "./modules/users/containers/edit-user-shell/edit-user-shell.component";

const routes: Routes = [
    { path: 'Users', component: UsersListShellComponent },
    { path: 'New-User', component: NewUserShellComponent },
    { path: 'Vehicles', component: VehicleListShellComponent },
    { path: 'Edit-User/:id', component: EditUserShellComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
