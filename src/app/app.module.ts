import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbarModule} from '@angular/material/toolbar';

import {Module1Module} from "./modules/module1/module1.module";
import {Module2Module} from "./modules/module2/module2.module";
//import { Component3Component } from './components/component3/component3.component';

@NgModule({
    declarations: [
        AppComponent,
       // Component3Component,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatCardModule,
        MatCheckboxModule,
        MatBadgeModule,
        MatToolbarModule,
        Module1Module,
        Module2Module
    ],
    exports: [
        MatSliderModule,
        MatCardModule,
        MatCheckboxModule,
        MatBadgeModule,
        MatToolbarModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
