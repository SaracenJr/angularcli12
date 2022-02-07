import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersListShellComponent } from './containers/users-list-shell/users-list-shell.component';
import {UsersListComponent} from './components/users-list/users-list.component';
import { NewUserShellComponent } from './containers/new-user-shell/new-user-shell.component';
import { NewUserComponent } from './components/new-user/new-user.component';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import {SharedModule} from '../../shared/shared.module';
//import {MaterialModule} from '../../material/material.module';
/*import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';*/

@NgModule({
    declarations: [
        UsersListShellComponent,
        UsersListComponent,
        NewUserShellComponent,
        NewUserComponent
    ],
    imports: [
        CommonModule,
      //  MaterialModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
     //   MatNativeDateModule,
   //     HttpClientModule
    ],
    exports: [
        SharedModule,
        UsersListShellComponent,
      //  MaterialModule,
    ]
})
export class UsersModule { }