import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewUserShellComponent} from "./containers/new-user-shell/new-user-shell.component";
import {VehicleListShellComponent} from "../vehicles/containers/vehicle-list-shell/vehicle-list-shell.component";
import {EditUserShellComponent} from "./containers/edit-user-shell/edit-user-shell.component";
import {AuthGuard} from "../authorization/services/auth.guard";
import {ExitEditPageGuard} from "./exit-edit-page.guard";
import {UsersListShellComponent} from "./containers/users-list-shell/users-list-shell.component";
import {UsersShellComponent} from "../../containers/users-shell/users-shell.component";
import {InfoUserShellComponent} from "./containers/info-user-shell/info-user-shell.component";
import {CompanyInfoUserShellComponent} from "./containers/company-info-user-shell/company-info-user-shell.component";
import {PersonalInfoUserShellComponent} from "./containers/personal-info-user-shell/personal-info-user-shell.component";
import {ContactsInfoUserShellComponent} from "./containers/contacts-info-user-shell/contacts-info-user-shell.component";
import {UsersTablesShellComponent} from "./containers/users-tables-shell/users-tables-shell.component";

const routes: Routes = [
    //{path: '', component: UsersShellComponent, children: [
            { path: 'Users',
                component: UsersListShellComponent,
                canActivate: [AuthGuard]},
            {path: 'Table',
                component: UsersTablesShellComponent,
                canActivate: [AuthGuard]},
            { path: 'New-User',
                component: NewUserShellComponent,
                canActivate: [AuthGuard]},
            { path: 'Edit-User/:id',
                component: EditUserShellComponent,
                canDeactivate:[ExitEditPageGuard],
                canActivate: [AuthGuard] },
            { path: 'Info-User/:id',
                component: InfoUserShellComponent,
                canActivate: [AuthGuard],
                children: [
                    { path: 'company-info',
                        component: CompanyInfoUserShellComponent},
                    { path: 'personal-info',
                        component: PersonalInfoUserShellComponent},
                    { path: 'contacts-info',
                        component: ContactsInfoUserShellComponent},
                ]},
            {path: '', redirectTo: 'Users', pathMatch: 'full'}
     //   ]},

   // {path: '', redirectTo: 'Users', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
