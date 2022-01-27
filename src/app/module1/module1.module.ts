import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Com1Component } from './com1/com1.component';
import {Com2Component} from "../module2/com2/com2.component";
import { Component1Component } from './component1/component1.component';



@NgModule({
  declarations: [
    Com1Component,
    Component1Component
  ],
  imports: [
    CommonModule
  ],
    exports: [
        Com1Component
    ]
})
export class Module1Module { }
