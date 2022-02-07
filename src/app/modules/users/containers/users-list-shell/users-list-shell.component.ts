import {Component, OnInit, QueryList} from '@angular/core';

import {IPerson} from "../../interfaces/person.interface";
import {PersonService} from "../../services/person.service";
import {ICard} from "../../../../shared/components/component-card/interfaces/card.interface";
import {FavoriteService} from "../../../../shared/services/favorite.service";

@Component({
    selector: 'app-users-list-shell',
    templateUrl: './users-list-shell.component.html',
    styleUrls: ['./users-list-shell.component.css'],
})
export class UsersListShellComponent implements OnInit {

    public cards: ICard[] = [];
    public favoritePersons : any;
    public isFiltered : boolean = false;

    constructor(
        public persons: PersonService,
        public favorites: FavoriteService
    ) { }

    ngOnInit(): void {
        this.persons.getPersons().subscribe(data => data.forEach((person) => {
            let card : ICard = {
                title: person.firstName+' '+person.lastName,
                subtitle: ''+person.age,
                firstContent: person.company+', '+person.department,
                secondContent: person.activated ? 'active': 'non-active',
                id: person.id
            };
            this.cards.push(card)}));
    }

    addFavorite(id: number) : void{
        this.favoritePersons = [];
        this.favorites.add(id, 'person').subscribe(data => data.forEach((fav: {id: number, type: string}) => {
            if(fav.type === 'person'){
                this.favoritePersons.push(this.cards.find((card) => card.id === fav.id));
                console.log('fav:', this.favoritePersons);
            }
        }));
    }

    onlyActive() : void{
        this.isFiltered = !this.isFiltered;
    }

    /*get filtered() {
        return this.isFiltered
            ? this.personsFiltered.filter((person) => person.activated)
            : this.personsFiltered;
    }*/



/*    deactivateAll(){
        /!*let res = this.persons.getPersons();
        res.forEach((person) => {
            if (person.activated && person.age >= 18) {
                person.activated = false;
            }
        });
        this.personsFiltered = [...res];*!/

        this.personsFiltered.forEach((person) => {
            if (person.activated && person.age >= 18) {
                person.activated = false;
            }
        });

        /!*this.personsFiltered
            .filter((person) => person.activated && person.age >= 18)
            .forEach((person) => this.changeActive(person.id));*!/

        console.log(this.personsFiltered);
    }*/


}
