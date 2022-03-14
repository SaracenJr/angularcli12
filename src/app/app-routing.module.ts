import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersListShellComponent } from './modules/users/containers/users-list-shell/users-list-shell.component';
import {NewUserShellComponent} from './modules/users/containers/new-user-shell/new-user-shell.component'
import {VehicleListShellComponent} from "./modules/vehicles/containers/vehicle-list-shell/vehicle-list-shell.component";
import {EditUserShellComponent} from "./modules/users/containers/edit-user-shell/edit-user-shell.component";
import {RegistrationShellComponent} from "./modules/authorization/containers/registration-shell/registration-shell.component";
import {LoginShellComponent} from "./modules/authorization/containers/login-shell/login-shell.component";
import {ExitEditPageGuard} from "./modules/users/exit-edit-page.guard";
import {AuthGuard} from "./modules/authorization/services/auth.guard";
import {AuthShellComponent} from "./containers/auth-shell/auth-shell.component";
import {UsersShellComponent} from "./containers/users-shell/users-shell.component";


 const routes: Routes = [
     { path: 'Auth', component: AuthShellComponent},
     { path: 'Users', component: UsersShellComponent, canActivate: [AuthGuard], loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },
     { path: 'Vehicles', component: VehicleListShellComponent, canActivate: [AuthGuard], loadChildren: () => import('./modules/vehicles/vehicles.module').then(m => m.VehiclesModule) },
     { path: '', redirectTo: 'Auth', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
