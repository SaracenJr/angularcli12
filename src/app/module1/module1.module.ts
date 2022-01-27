import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Com1Component } from './com1/com1.component';

import { Component1Component } from './component1/component1.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    Com1Component,
    Component1Component
  ],
  imports: [
    CommonModule,
      MatCardModule,
      MatButtonModule
  ],
    exports: [
        Component1Component
    ]
})
export class Module1Module { }
