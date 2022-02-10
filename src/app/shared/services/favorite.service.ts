import { Injectable } from '@angular/core';
import {PersonService} from "../../modules/users/services/person.service";
import {delay} from "rxjs/operators";
import {of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FavoriteService {
    public favorites : [{id: number, type: string}] = [{id: -1, type: ''}];

    constructor(
        public persons: PersonService
    ) { }

    add(id: number, type: string){
        if(!this.favorites.find((fav: {id: number, type: string}) => fav.id == id && fav.type == type)) {
            let fav : {id: number, type: string} = {
                id: id,
                type: type
            }
            this.favorites.push(fav) ;
            console.log('add: ', this.favorites);
        }
        return of(this.favorites).pipe(delay(1000));
    }
    getFavorites(){
        return of(this.favorites).pipe(delay(1000));
    }
}
