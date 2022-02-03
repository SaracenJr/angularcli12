import { Injectable } from '@angular/core';
import { personInterface} from '../interfaces/person.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

    private persons: personInterface[] = [
        {firstName:'kek', lastName: 'kek', age: 11, company: 'com', department: 'kok', activated: true, id: 0},
        {firstName:'man', lastName: 'man', age: 61, company: 'ma', department: 'dgf', activated: true, id: 1},
        {firstName:'wertyjk', lastName: 'werthj', age: 131, company: 'werhj', department: 'erhj', activated: true, id: 2},
        {firstName:'qwerty', lastName: 'qwer', age: 16, company: 'qwert', department: 'qwert', activated: false, id: 3}
    ]

  constructor() { }

  getPersons() {
      return [...this.persons];
  }
  newPerson(person: personInterface){
        let newPerson: personInterface = {
            firstName: person.firstName,
            lastName: person.lastName,
            age: person.age,
            company: person.company,
            department: person.department,
            activated: true,
            id: this.persons.length
        }
        this.persons.push(newPerson);

  }
}
