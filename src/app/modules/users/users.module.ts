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
        EditUserShellComponent
    ],
    imports: [
        CommonModule,
      //  MaterialModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
     //   MatNativeDateModule,
   //     HttpClientModule,
    ],
    exports: [
        SharedModule,
        UsersListShellComponent,
        NewUserShellComponent,
        EditUserShellComponent
      //  MaterialModule,
    ],
})
export class UsersModule { }
