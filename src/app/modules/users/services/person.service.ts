import { Injectable } from '@angular/core';
import { IPerson} from '../interfaces/person.interface';
import {catchError, delay, map, shareReplay} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {AbstractControl, AsyncValidatorFn, ValidationErrors} from "@angular/forms";
import {IRandomUser} from "../interfaces/randomUser.interface";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

    private persons: IPerson[] = [
        {firstName:'kek', lastName: 'kek', age: 17, company: 'com888', department: 'kok', gender: 'male', email: 'fff@gmail.com', activated: true, addresses: [{addressLine: 'Minsk', city: '', zip: ''}], id: '0'},
        {firstName:'man', lastName: 'man', age: 61, company: 'madfgh', department: 'dgf', gender: 'male', email: 'ggg@gmail.com', activated: true, addresses: [{addressLine: 'brest', city: '', zip: ''}], id: '1'},
        {firstName:'wertyjk', lastName: 'werthj', age: 31, company: 'werhjfrt', department: 'erhj', gender: 'female', email: 'aaa@gmail.com', activated: true, addresses: [{addressLine: 'sdfghjk', city: '', zip: ''}], id: '2'},
        {firstName:'qwerty', lastName: 'qwer', age: 16, company: 'qwerterfty', department: 'qwert', gender: 'male', email: 'refff@gmail.com', activated: false, addresses: [{addressLine: 'lkjhgfd', city: '', zip: ''}], id: '3'}
    ]

    public Users  = this.getUsersFromServer().pipe();

  constructor(
      public httpService: HttpService,
  ) { }

    public getUsersFromServer(options?): Observable<IRandomUser[]> {
        const queryParams = {
            results: options ? options.results : 5,
            //inc: 'gender,name,location,email,dob,picture',
            seed: 'users',
            page: options ? options.page : 1
        }

        return this.httpService
            .get('', {params: queryParams})
            .pipe(
                map(response =>
                    response['results'],
            )
            )
    }

    public getUsers(){
      return of(this.Users).pipe();
    }
 /*   public getUserById(id: string){
      return of(this.Users).pipe(
          delay(500),
          map(users => {
              users.find(user => {user.id === id})
          })
      )
    }*/

  getPersons() {
      return of([...this.persons]).pipe(delay(1000));
  }
  getPersonById(id: string) {
        let person = this.persons.find(element => {
            return element.id === id;
        });
        return of(person).pipe(delay(1000));
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
            id: ''+this.persons.length
        }
        this.persons.push(newPerson);
        return of([]).pipe(delay(1000));
  }

  editPerson(user: IPerson, id: string) {
      let person = this.persons.find(person => person.id === id);
      this.persons.splice(this.persons.indexOf(person), 1);
      this.newPerson(user);
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
