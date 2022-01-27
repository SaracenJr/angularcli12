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

import { Page1Component } from "./page1/page1.component";
import { Page2Component } from "./page2/page2.component";
import { Page3Component } from "./page3/page3.component";

@NgModule({
    declarations: [
        AppComponent,
        Page1Component,
        Page2Component,
        Page3Component
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
