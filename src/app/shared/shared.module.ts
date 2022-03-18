import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ComponentCardComponent} from './components/component-card/component-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatChipsModule} from '@angular/material/chips';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FullnamePipe } from './pipes/fullname.pipe';
import {MatTableModule} from "@angular/material/table";
import {CdkTableModule} from "@angular/cdk/table";
import {MatSortModule} from "@angular/material/sort";


//import {MaterialModule} from '../material/material.module';

@NgModule({
    declarations: [
        ComponentCardComponent,
        FullnamePipe
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatRadioModule,
        MatChipsModule,
        MatPaginatorModule,
        MatSortModule,
        CdkTableModule,
        MatTableModule,
      //  MaterialModule,

    ],
    exports: [
        ComponentCardComponent,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatRadioModule,
        MatChipsModule,
        MatPaginatorModule,
        MatSortModule,
        CdkTableModule,
        MatTableModule,
        FullnamePipe,
        // MaterialModule,
    ]
})
export class SharedModule { }
