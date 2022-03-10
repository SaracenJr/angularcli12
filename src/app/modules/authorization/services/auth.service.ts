import { Injectable } from '@angular/core';
import {IUser} from "../interfaces/user.interface";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getUser() {
      return JSON.parse(localStorage.getItem('login'));
  }
  public loginUser(user : IUser) : void{
      localStorage.setItem('login', JSON.stringify(user));
  }
  setUser(user : IUser) : void{
      let users : IUser[] = JSON.parse(localStorage.getItem('users'));
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
  }
  public removeUser() : void{
      localStorage.removeItem('login');
  }
  checkUser(user : IUser) : Observable<boolean>{
      let check = false;
      return of(check).pipe(
          map(check => {
              let users : IUser[] = JSON.parse(localStorage.getItem('users'));
              users.forEach((User) => {
                  if(user.name === User.name && user.password === User.password){
                      check = true;
                  }
              })
              console.log(check);
              return check;
          })
      );
  }
  checkLoggedUser() : boolean{
      return JSON.parse(localStorage.getItem('login'));
  }
}
