import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {UsersModule} from './modules/users/users.module';
import {SharedModule} from './shared/shared.module';

//import {MaterialModule} from './material/material.module';
import {VehiclesModule} from "./modules/vehicles/vehicles.module";

import { HttpClientModule } from '@angular/common/http';
import {AuthorizationModule} from "./modules/authorization/authorization.module";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { HeaderComponent } from './components/header/header.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AuthShellComponent } from './containers/auth-shell/auth-shell.component';
import {UsersShellComponent} from "./containers/users-shell/users-shell.component";
import {FullnamePipe} from "./shared/pipes/fullname.pipe";

//import { UsersShellComponent } from './containers/users-shell/users-shell.component';
//import { ComponentCardComponent } from './shared/components/components-card/components-card.components';
//import { UsersListComponent } from './modules/users/components/users-list/users-list.components';

@NgModule({
    declarations: [
        AppComponent,
       // HeaderComponent,
        ToolbarComponent,
        HeaderComponent,
        AuthShellComponent,
        UsersShellComponent,

        //UsersShellComponent,
      //  EditUserShellComponent,
      //  NewUserAddressesComponent,
    ],
    imports: [
        BrowserModule,
        //AppRoutingModule,
        BrowserAnimationsModule,
        UsersModule,
        VehiclesModule,
        SharedModule,
        HttpClientModule,
        AuthorizationModule,
        AppRoutingModule
       // MaterialModule,
    ],
    exports: [
        SharedModule
      //  MaterialModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
