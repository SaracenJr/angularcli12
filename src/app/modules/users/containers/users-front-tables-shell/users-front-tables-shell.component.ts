import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {PersonService} from "../../services/person.service";
import {map} from "rxjs/operators";
import {IRandomUser} from "../../interfaces/randomUser.interface";

export interface UserData {
    fullName: string,
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
    public displayedColumns : string[] = ['fullName', 'email', 'age', 'department'];
    public users : Observable<UserData[]>;
    public dataSource: MatTableDataSource<UserData>;
    public type : string = 'front';

    // @ViewChild(MatSort, { static: false }) sort: MatSort;
    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(
      public personService: PersonService,
  ) { }

    ngAfterViewInit () : void{
        this.personService
            .getUsersFromServer()
            .pipe(
                map((users) => this.mapUsersToTable(users))
            )
            .subscribe((users) => {
                this.dataSource = new MatTableDataSource(users);
                this.dataSource.paginator = this.paginator;
            })

    }

    mapUsersToTable(users : IRandomUser[]) : UserData[]{
        return users.map((user) => ({
            fullName: user.name.last + ', ' + user.name.first,
            email: user.email,
            age: user.dob.age,
            department: user.location.city
        }))
    }
}

