import { Component, OnInit } from '@angular/core';


import {VehicleService} from "../../services/vehicle.service";
import {FavoriteService} from "../../../../shared/services/favorite.service";
import {ICard} from "../../../../shared/components/component-card/interfaces/card.interface";

@Component({
    selector: 'app-vehicle-list-shell',
    templateUrl: './vehicle-list-shell.component.html',
    styleUrls: ['./vehicle-list-shell.component.css']
})
export class VehicleListShellComponent implements OnInit {

    public cards: ICard[] = [];
    public favoriteVehicles : any;

    constructor(
        public Vehicles: VehicleService,
        public favorites: FavoriteService
    ) { }

    ngOnInit(): void {
        this.Vehicles.getVehicles().subscribe(data => data.forEach((vehicle) => {
            let card : ICard = {
                title: vehicle.name,
                subtitle: vehicle.color,
                firstContent: vehicle.number,
                secondContent: ''+vehicle.releaseYear,
                id: vehicle.id
            };
            this.cards.push(card)}));
    }
    addFavorite(id: number) : void{
        this.favoriteVehicles = [];
        this.favorites.add(id, 'vehicle').subscribe(data => data.forEach((fav: {id: number, type: string}) => {
            if(fav.type === 'vehicle'){
                this.favoriteVehicles.push(this.cards.find((card) => card.id === fav.id));
            }
        }));
    }
    /*get allVehicles() {
        return this.vehicles;
    }*/
}
