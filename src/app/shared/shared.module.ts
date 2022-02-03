import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UserCardComponent} from './components/user-card/user-card.component';
import {MaterialModule} from '../material/material.module';

@NgModule({
    declarations: [
        UserCardComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,

    ],
    exports: [
        UserCardComponent,
        MaterialModule,
    ]
})
export class SharedModule { }
