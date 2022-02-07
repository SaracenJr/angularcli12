import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { NewVehicleComponent } from './components/new-vehicle/new-vehicle.component';
import { VehicleListShellComponent } from './containers/vehicle-list-shell/vehicle-list-shell.component';
import { NewVehicleShellComponent } from './containers/new-vehicle-shell/new-vehicle-shell.component';

//import {MaterialModule} from '../../material/material.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [
        VehicleListComponent,
        NewVehicleComponent,
        VehicleListShellComponent,
        NewVehicleShellComponent
    ],
    imports: [
        CommonModule,
    //    MaterialModule,
        SharedModule
    ],
    exports: [
    //    MaterialModule,
        SharedModule,
        VehicleListShellComponent
    ]
})
export class VehiclesModule { }
