import { Injectable } from '@angular/core';
import {PersonService} from "../../modules/users/services/person.service";
import {delay} from "rxjs/operators";
import {of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FavoriteService {
    public favorites : any = [];

    constructor(
        public persons: PersonService
    ) { }

    add(id: number, type: string){
        if(!this.favorites.find((fav: {id: number, type: string}) => fav.id == id && fav.type == type)) {
            this.favorites.push({
                id: id,
                type: type
            }) ;
            console.log('add: ', this.favorites);
        }
        return of(this.favorites).pipe(delay(1000));
    }
}
