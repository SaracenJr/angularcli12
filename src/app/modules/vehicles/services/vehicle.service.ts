import { Injectable } from '@angular/core';
import { IVehicle} from '../interfaces/vehicle.interface';
import {of} from "rxjs";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
    private vehicles: IVehicle[] = [
        {name:'mazda', color: 'green', releaseYear: 2001, number: '1944', id: 0},
        {name:'ford', color: 'black', releaseYear: 2010, number: '7777', id: 1},
        {name:'opel', color: 'red', releaseYear: 1993, number: '0568', id: 2},
    ]
  constructor() { }

    getVehicles() {
        return of([...this.vehicles]).pipe(delay(1000));
    }
}
