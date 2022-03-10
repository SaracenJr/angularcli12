import { Injectable } from '@angular/core';
//import {GridModels} from '@rmsys-lib';
import {HttpClient} from '@angular/common/http';
import {IPerson} from "../interfaces/person.interface";
import {map, tap, delay, catchError} from "rxjs/operators";
import {Observable} from "rxjs";
import {RandomUser} from "../interfaces/randomUser.interface";
import {environment} from "../../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(
        private http: HttpClient
    ) {
       // this.apiUrl = environment.apiUrl;
    }
   /* public get(
        path: string,
        data: any = null,
        options: any = this.getDefaultRequestOptions()): Observable<any> {
        const fullPath: string = this.getPathWithData(path, data);
        return this.http
            .get(this.apiUrl + fullPath, options)
            .pipe(catchError(this.handleError.bind(this)));
    }*/
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
