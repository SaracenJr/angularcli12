import { Injectable } from '@angular/core';
import {ILoggedUser} from "../interfaces/loggedUser.interface";
import {Observable, of} from "rxjs";
import {delay, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getLoggedUser() : Observable<ILoggedUser> {
      let user : ILoggedUser = JSON.parse(localStorage.getItem('login'));
      return of(user).pipe(
          delay(500)
      );
  }
  public setLoggedUser(user : ILoggedUser) : Observable<null>{
      localStorage.setItem('login', JSON.stringify(user));
      return of(null).pipe(
          delay(500)
      );
  }
  public setUser(user : ILoggedUser) : Observable<null>{
      let users : ILoggedUser[] = JSON.parse(localStorage.getItem('users'));
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      return of(null).pipe(
          delay(500)
      )
  }
  public removeLoggedUser() : Observable<null>{
      localStorage.removeItem('login');
      return of(null).pipe(
          delay(500)
      )
  }
  checkUser(user : ILoggedUser) : Observable<boolean>{
      let check = false;
      return of(check).pipe(
          map(check => {
              let users : ILoggedUser[] = JSON.parse(localStorage.getItem('users'));
              users.forEach((User) => {
                  if(user.name === User.name && user.password === User.password){
                      check = true;
                  }
              })
              return check;
          })
      );
  }
  checkLoggedUser() : boolean{
      return !!JSON.parse(localStorage.getItem('login'));
  }
}
