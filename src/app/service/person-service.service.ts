import { Injectable } from '@angular/core';
import { iPerson} from './iPerson';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

    private persons: iPerson[] = [
        {name:'kek', age: 11, activated: false, id: 0},
        {name:'man', age: 41, activated: true, id: 1},
        {name:'qwerty', age: 123, activated: true, id: 2},
        {name:'trr', age: 12, activated: true, id: 3}
    ]

  constructor() { }

  getPersons() {
      return [...this.persons];
  }
  changeActive(id: number){
        let p = this.persons.find( (person) => person.id === id);
        console.log(p);
        if (p) {
            p.activated = false;
        }
    }
    deactivateAll() {
        this.persons.forEach((person) => {
            if (person.activated && person.age >= 18) {
                person.activated = false;
            }
        })
    }
}
