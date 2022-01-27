import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Com2Component } from './com2/com2.component';
import { Component2Component } from './component2/component2.component';



@NgModule({
    declarations: [
        Com2Component,
        Component2Component
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        Component2Component
    ]

})
export class Module2Module { }
