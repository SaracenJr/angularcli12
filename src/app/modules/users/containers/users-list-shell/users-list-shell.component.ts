import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';

import {personInterface} from "../../interfaces/person.interface";
import {PersonService} from "../../services/person.service";
//import {UserCardComponent} from "../../../../shared/components/user-card/user-card.component";

@Component({
    selector: 'app-users-list-shell',
    templateUrl: './users-list-shell.component.html',
    styleUrls: ['./users-list-shell.component.css'],
})
export class UsersListShellComponent implements OnInit {

   // @ViewChildren(UserCardComponent) allCardsComponent!: QueryList<UserCardComponent>;

    public personsFiltered: personInterface[] = [];
    public isFiltered:boolean = false;

    constructor(
        public persons: PersonService,
    ) { }

    ngOnInit(): void {
        this.personsFiltered = this.persons.getPersons();
    }

    onlyActive(){
        this.isFiltered = !this.isFiltered;
    }

    get filtered() {
        return this.isFiltered
            ? this.personsFiltered.filter((person) => person.activated)
            : this.personsFiltered;
    }

    deactivateAll(){
        /*let res = this.persons.getPersons();
        res.forEach((person) => {
            if (person.activated && person.age >= 18) {
                person.activated = false;
            }
        });
        this.personsFiltered = [...res];*/

        this.personsFiltered.forEach((person) => {
            if (person.activated && person.age >= 18) {
                person.activated = false;
            }
        });

        /*this.personsFiltered
            .filter((person) => person.activated && person.age >= 18)
            .forEach((person) => this.changeActive(person.id));*/

        console.log(this.personsFiltered);
    }

    changeActive(id: number){
        let p = this.personsFiltered.find((person) => person.id === id);
        if (p && p.activated) {
            p.activated = false;
        }else if(p && !p.activated){
            p.activated = true;
        }
    }

}
