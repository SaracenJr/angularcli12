import {Component, OnInit, QueryList} from '@angular/core';

import {PersonService} from "../../services/person.service";
import {ICard} from "../../../../shared/components/component-card/interfaces/card.interface";
import {FavoriteService} from "../../../../shared/services/favorite.service";
import {fromEvent, of} from "rxjs";
import {debounceTime, distinctUntilChanged, map, switchMap} from "rxjs/operators";
import {IPerson} from "../../interfaces/person.interface";
import {HttpService} from "../../services/http.service";
import {RandomUser} from "../../interfaces/randomUser.interface";
import {AuthService} from "../../../authorization/services/auth.service";
import {Router} from "@angular/router";

//const searchBox = document.getElementById('search');

//const keyup$ = fromEvent(searchBox, 'keyup')



@Component({
    selector: 'app-users-list-shell',
    templateUrl: './users-list-shell.component.html',
    styleUrls: ['./users-list-shell.component.css'],
})
export class UsersListShellComponent implements OnInit {

    public cards: ICard[] = [];
    public users : RandomUser[] = [];
    public usersCards : ICard[] = [];
    public favoritePersons : ICard[] = [];
    public isFiltered : boolean = false;

    constructor(
        public personService: PersonService,
        public favoriteService: FavoriteService,
        public httpService: HttpService,
        public authService: AuthService,
        private router: Router,
    ) { }

    ngOnInit(): void {

        if(!this.authService.checkLoggedUser()){
            this.router.navigate(['login']);
        }

        /*this.httpService.getUser(5).subscribe((data)=>{
            this.users = data;
            this.users.forEach(user => {
                this.createUserCard(user);
            })
        });*/

        this.personService.getPersons().subscribe(data => data.forEach((person) => {
            this.createCard(person);
            this.favoriteService.getFavorites().subscribe(data => {
                data.forEach((fav) => {
                    if(fav.type === 'person'){
                        let card = this.cards.find((card) => card.id === ''+fav.id);
                        if(card){
                            this.favoritePersons.push(card);
                        }
                    }
                })
            })}));

        const applyFilter = keys => {
            console.log(keys);
            console.log('cards', this.cards);
            this.cards.length = 0;
            this.personService.getPersons().subscribe(data => {
                    data.forEach((person) => {
                        this.createCard(person);
                    })
                    this.cards = this.cards.filter(e => {
                        return e.title.toLowerCase().indexOf(keys.toLowerCase()) > -1;
                    });
                    console.log('cards', this.cards);
                }
            );

        }
        const fakeContinentsRequest = keys => of(applyFilter(keys))
            .pipe();

        fromEvent(document.getElementById('search'), 'keyup')
            .pipe(
                debounceTime(500),
                map((e: any) => e.target.value),
                distinctUntilChanged(),
                switchMap(fakeContinentsRequest),
            ).subscribe();
    }

    createCard(person : IPerson): void{
        let card : ICard = {
            title: person.firstName+' '+person.lastName,
            subtitle: ''+person.age,
            firstContent: person.company+', '+person.department + ', ' + person.activated ? 'active': 'non-active',
            secondContent: 'addresses: ' + person.addresses,
            id: ''+person.id
        };
        this.cards.push(card);
    }

    createUserCard(user : RandomUser){
        let card : ICard = {
            title: user.name.first + user.name.last,
            subtitle: ''+user.picture.large,
            firstContent: user.location.city,
            secondContent: user.phone,
            id: user.id.value
        };
        this.usersCards.push(card);
    }


    /*addFavorite(id: number) : void{
        //this.favoritePersons = [];
        this.favoriteService.add(id, 'person').subscribe(data => {
            if(data[data.length-1].type === 'person'){
                let card = this.cards.find((card) => card.id === data[data.length-1].id);
                if(card){
                    this.favoritePersons.push(card);
                }
            }
        });
    }*/

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
