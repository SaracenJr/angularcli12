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
    public favoriteVehicles : ICard[] = [];

    constructor(
        public VehicleService: VehicleService,
        public favoriteService: FavoriteService
    ) { }

    ngOnInit(): void {
        this.VehicleService.getVehicles().subscribe(data => data.forEach((vehicle) => {
            let card : ICard = {
                title: vehicle.name,
                subtitle: vehicle.color,
                firstContent: vehicle.number,
                secondContent: ''+vehicle.releaseYear,
                id: ''+vehicle.id
            };
            this.cards.push(card);
            /*this.favoriteService.getFavorites().subscribe(data => {
                data.forEach((fav) => {
                    if(fav.type === 'vehicle'){
                        let card = this.cards.find((card) => card.id === fav.id);
                        if(card){
                            this.favoriteVehicles.push(card);
                        }
                    }
                })
            })*/
        }));
    }
    /*addFavorite(id: number) : void{
        //this.favoriteVehicles = [];
        this.favoriteService.add(id, 'vehicle').subscribe(data => {
            if (data[data.length - 1].type === 'vehicle') {
                let card = this.cards.find((card) => card.id === data[data.length - 1].id);
                if(card){
                    this.favoriteVehicles.push(card);
                }
            }
        })
    }*/

       /* }data.forEach((fav: {id: number, type: string}) => {
            if(fav.type === 'vehicle'){
                this.favoriteVehicles.push(this.cards.find((card) => card.id === fav.id));
            }
        }));*/

    /*get allVehicles() {
        return this.vehicles;
    }*/
}
