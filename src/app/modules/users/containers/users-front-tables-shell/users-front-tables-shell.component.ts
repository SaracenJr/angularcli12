import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {PersonService} from "../../services/person.service";
import {map} from "rxjs/operators";
import {IRandomUser} from "../../interfaces/randomUser.interface";

export interface UserData {
    firstName: string,
    lastName: string,
    email: string,
    age: string,
    department: string
}

@Component({
  selector: 'app-users-front-tables-shell',
  templateUrl: './users-front-tables-shell.component.html',
  styleUrls: ['./users-front-tables-shell.component.css']
})
export class UsersFrontTablesShellComponent implements AfterViewInit {
    public users : UserData[];

    constructor(
        public personService: PersonService,
    ) { }

    ngAfterViewInit () : void{
        this.personService
            .getUsersFromServer()
            .pipe(
                map((users) => this.mapUsersToTable(users))
            )
            .subscribe(
                (users) => {
                    this.users = users;
                }
            )
    }
    mapUsersToTable(users : IRandomUser[]) : UserData[]{
        return users.map((user) => ({
            firstName: user.name.first,
            lastName: user.name.last,
            email: user.email,
            age: user.dob.age,
            department: user.location.city
        }))
    }
}

