import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ComponentCardComponent} from './components/component-card/component-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
//import {MaterialModule} from '../material/material.module';

@NgModule({
    declarations: [
        ComponentCardComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,

      //  MaterialModule,

    ],
    exports: [
        ComponentCardComponent,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
       // MaterialModule,
    ]
})
export class SharedModule { }
