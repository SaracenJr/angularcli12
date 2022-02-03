import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersListShellComponent } from './modules/users/containers/users-list-shell/users-list-shell.component';
import {NewUserShellComponent} from './modules/users/containers/new-user-shell/new-user-shell.component'

const routes: Routes = [
    { path: 'UsersListShellComponent', component: UsersListShellComponent },
    { path: 'NewUserShellComponent', component: NewUserShellComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
