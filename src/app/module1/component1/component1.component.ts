import { Component, OnInit } from '@angular/core';

interface iPerson {
    name: string
    age: number
    activated: boolean
    id: number
}

@Component({
    selector: 'app-component1',
    templateUrl: './component1.component.html',
    styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

    public persons: iPerson[] = [{name:'kek', age: 11, activated: false, id: 0},
        {name:'man', age: 41, activated: false, id: 1},
        {name:'qwerty', age: 123, activated: true, id: 2},
        {name:'trr', age: 12, activated: true, id: 3}];
    public personsFiltered: iPerson[] = this.persons;
    constructor() { }
    onlyActive(){
        this.personsFiltered = this.persons.filter(person => person.activated);
    }
    changeActive(id: number){
        let p = this.persons.find( (person) => {return person.id === id});
        console.log(p);
        if (p) {
            p.activated = false;
        }
        this.onlyActive();
    }
    ngOnInit(): void {
    }

}
