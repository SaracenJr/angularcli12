import { Injectable } from '@angular/core';
import { IPerson} from '../interfaces/person.interface';
import {catchError, delay, map} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {AbstractControl, AsyncValidatorFn, ValidationErrors} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

    private persons: IPerson[] = [
        {firstName:'kek', lastName: 'kek', age: 17, company: 'com', department: 'kok', gender: 'male', email: 'fff@gmail.com', activated: true, addresses: ['Minsk'], id: 0},
        {firstName:'man', lastName: 'man', age: 61, company: 'ma', department: 'dgf', gender: 'male', email: 'ggg@gmail.com', activated: true, addresses: ['Brest'], id: 1},
        {firstName:'wertyjk', lastName: 'werthj', age: 31, company: 'werhj', department: 'erhj', gender: 'female', email: 'aaa@gmail.com', activated: true, addresses: ['green str'], id: 2},
        {firstName:'qwerty', lastName: 'qwer', age: 16, company: 'qwert', department: 'qwert', gender: 'male', email: 'refff@gmail.com', activated: false, addresses: ['central square'], id: 3}
    ]

  constructor() { }

  getPersons() {
      return of([...this.persons]).pipe(delay(1000));
  }
  newPerson(person: IPerson){
        let newPerson: IPerson = {
            firstName: person.firstName,
            lastName: person.lastName,
            age: person.age,
            company: person.company,
            department: person.department,
            gender: person.gender,
            email: person.email,
            activated: true,
            addresses: person.addresses,
            id: this.persons.length
        }
        this.persons.push(newPerson);
        console.log(this.persons);
        return of([]).pipe(delay(1000));
  }
    emailExists(email: string): Observable<boolean> {
        return of(email).pipe(
            delay(500),
            map((email) => {
                const emails : string[] = [];
                    this.persons.forEach(person => {
                        if(person.email){
                            emails.push(person.email);
                        }
                });
                return emails.includes(email);
            })
        );
    }
    uniqueEmailValidator(): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            return this.emailExists(control.value).pipe(
                map((exists) => (exists ? { emailExists: true } : null)),
                catchError(async (err) => null)
            );
        };
    }
}
