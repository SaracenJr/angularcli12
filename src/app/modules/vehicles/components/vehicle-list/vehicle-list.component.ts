import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {IVehicle} from "../../interfaces/vehicle.interface";
import {ICard} from "../../../../shared/components/component-card/interfaces/card.interface";

@Component({
    selector: 'app-vehicle-list',
    templateUrl: './vehicle-list.component.html',
    styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
    @Input() cards: ICard[] = [];
    @Input() favoriteCards: any;
    @Output() addFavorite = new EventEmitter<number>();

    constructor() { }

    ngOnInit(): void {
    }
    ngOnChanges(changes: SimpleChanges): void {
    }

    addToFavorite(id?:number) : void{
        this.addFavorite.emit(id);
    }
}
