import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {UsersModule} from './modules/users/users.module';
import {SharedModule} from './shared/shared.module';

//import {MaterialModule} from './material/material.module';
import {VehiclesModule} from "./modules/vehicles/vehicles.module";

//import { ComponentCardComponent } from './shared/components/component-card/component-card.component';
//import { UsersListComponent } from './modules/users/components/users-list/users-list.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        UsersModule,
        VehiclesModule,
        SharedModule,
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
