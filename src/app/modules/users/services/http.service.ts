import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPerson} from "../interfaces/person.interface";
import { map, tap, delay } from "rxjs/operators";
import {Observable} from "rxjs";
import {RandomUser} from "../interfaces/randomUser.interface";

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(
        private http: HttpClient
    ) { }

    getUser(amount): Observable<RandomUser[]> {
        return this.http.get<RandomUser[]>("https://randomuser.me/api/?results=" + amount).pipe(
            delay(1000),
            map(
                (user): RandomUser[] => {
                    console.log(user);
                    return user["results"];
                }
            ))
    }


}
