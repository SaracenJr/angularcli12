import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {UserData} from "../users-front-tables-shell/users-front-tables-shell.component";
import {MatPaginator} from "@angular/material/paginator";
import {PersonService} from "../../services/person.service";
import {map} from "rxjs/operators";
import {IRandomUser} from "../../interfaces/randomUser.interface";

@Component({
  selector: 'app-users-back-tables-shell',
  templateUrl: './users-back-tables-shell.component.html',
  styleUrls: ['./users-back-tables-shell.component.css']
})
export class UsersBackTablesShellComponent implements AfterViewInit {
    public displayedColumns : string[] = ['fullName', 'email', 'age', 'department'];
    public users : Observable<UserData[]>;
    public dataSource: MatTableDataSource<UserData>;
    public type : string = 'back';

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
    backSortUsers(data: object) : void{
      this.personService.getSortUsers(data).pipe(
          map(users => this.mapUsersToTable(users))
      ).subscribe(users => {
          this.dataSource = new MatTableDataSource(users);
      })
    }

}
