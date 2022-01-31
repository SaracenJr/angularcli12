import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Component1ShellComponent } from '../../containers/component1Shell/component1Shell.component';
import { Component3Component } from '../../components/component3/component3.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
      Component1ShellComponent,
      Component3Component
  ],
  imports: [
      CommonModule,
      MatCardModule,
      MatButtonModule
  ],
    exports: [
        Component1ShellComponent,
        Component3Component
    ]
})
export class Module1Module { }
