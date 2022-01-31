import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Component2ShellComponent } from '../../containers/component2Shell/component2Shell.component';



@NgModule({
    declarations: [
        Component2ShellComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        Component2ShellComponent
    ]

})
export class Module2Module { }
