import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersListShellComponent } from './containers/users-list-shell/users-list-shell.component';
import {UsersListComponent} from './components/users-list/users-list.component';
import { NewUserShellComponent } from './containers/new-user-shell/new-user-shell.component';
import { NewUserComponent } from './components/new-user/new-user.component';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import {SharedModule} from '../../shared/shared.module';
import { NewUserAddressesComponent } from './components/new-user-addresses/new-user-addresses.component';
import { EditUserShellComponent } from './containers/edit-user-shell/edit-user-shell.component';

//import {UserRoutingModule} from "./user-routing/user-routing.module";

import {RouterModule} from "@angular/router";
import {UsersRoutingModule} from "./users-routing.module";
import {UsersShellComponent} from "../../containers/users-shell/users-shell.component";
import {HeaderComponent} from "../../components/header/header.component";
import { InfoUserShellComponent } from './containers/info-user-shell/info-user-shell.component';
import { CompanyInfoUserShellComponent } from './containers/company-info-user-shell/company-info-user-shell.component';
import { PersonalInfoUserShellComponent } from './containers/personal-info-user-shell/personal-info-user-shell.component';
import { ContactsInfoUserShellComponent } from './containers/contacts-info-user-shell/contacts-info-user-shell.component';
import { UsersTablesShellComponent } from './containers/users-tables-shell/users-tables-shell.component';
import { UsersTablesComponent } from './components/users-tables/users-tables.component';
import { UsersFrontTablesShellComponent } from './containers/users-front-tables-shell/users-front-tables-shell.component';
import { UsersBackTablesShellComponent } from './containers/users-back-tables-shell/users-back-tables-shell.component';
//import {AppRoutingModule} from "../../app-routing.module";

//import {MaterialModule} from '../../material/material.module';
/*import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';*/



@NgModule({
    declarations: [
        UsersListShellComponent,
        UsersListComponent,
        NewUserShellComponent,
        NewUserComponent,
        NewUserAddressesComponent,
        EditUserShellComponent,
        InfoUserShellComponent,
        CompanyInfoUserShellComponent,
        PersonalInfoUserShellComponent,
        ContactsInfoUserShellComponent,
        UsersTablesShellComponent,
        UsersTablesComponent,
        UsersFrontTablesShellComponent,
        UsersBackTablesShellComponent,


    ],
    imports: [
        CommonModule,
      //  MaterialModule,
       // AppRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        UsersRoutingModule
     //   MatNativeDateModule,
   //     HttpClientModule,
    ],
    exports: [
        SharedModule,
        UsersListShellComponent,
        NewUserShellComponent,
        EditUserShellComponent,

      //  MaterialModule,
    ],
})
export class UsersModule { }
