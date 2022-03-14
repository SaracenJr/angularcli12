import { Injectable } from '@angular/core';
//import {GridModels} from '@rmsys-lib';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {IPerson} from "../interfaces/person.interface";
import {map, tap, delay, catchError} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {IRandomUser} from "../interfaces/randomUser.interface";
import {environment} from "../../../../environments/environment";

const BASE_URL = 'https://randomuser.me/api/';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(
        private http: HttpClient
    ) {
       // this.apiUrl = environment.apiUrl;
    }
    public get(
        uri: string,
        options: any = null): Observable<any> {
        const path: string = BASE_URL + uri;
        return this.http
            .get(path, options)
            .pipe(catchError(this.handleError.bind(this)));
    }
    private handleError(err: HttpErrorResponse | ErrorEvent | any): Observable<never> {
        let message: string;
        let status: number;
        if (err.error instanceof ErrorEvent) {
            message = `Error: ${err.error.message}`;
            status = err.error.status;
        } else {
            message = `Code: ${err.status}: ${err.message}`;
            status = err.status
        }

        console.log(message);

        const errorObj = {message, status};
        return throwError(errorObj);
    }

    public post(
        uri: string,
        data: any = null,
        options: any = null): Observable<any> {

        const path: string = BASE_URL + uri;
        return this.http
            .post(
                path,
                data,
                options
            )
    }

    /*getUser(amount): Observable<RandomUser[]> {
        return this.http.get<RandomUser[]>("https://randomuser.me/api/?results=" + amount).pipe(
            delay(1000),
            map(
                (user): RandomUser[] => {
                    console.log(user);
                    return user["results"];
                }
            ))
    }*/


}
