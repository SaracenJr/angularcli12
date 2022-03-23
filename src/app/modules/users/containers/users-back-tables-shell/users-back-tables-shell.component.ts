import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {UserData} from "../users-front-tables-shell/users-front-tables-shell.component";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {PersonService} from "../../services/person.service";
import {map} from "rxjs/operators";
import {IRandomUser} from "../../interfaces/randomUser.interface";

@Component({
  selector: 'app-users-back-tables-shell',
  templateUrl: './users-back-tables-shell.component.html',
  styleUrls: ['./users-back-tables-shell.component.css']
})
export class UsersBackTablesShellComponent implements AfterViewInit {
    public users : UserData[];

    public pageSize: number;
    public totalSize: number;
    public pageIndex: number = 0;
    public sort;

  constructor(
      public personService: PersonService,
  ) { }

    ngAfterViewInit () : void{
        this.personService
            .getUsersFromServer()
            .pipe(
            )
            .subscribe(users => {
                this.users = this.mapUsersToTable(users.slice(0,5));
                this.totalSize = users.length;
                this.pageSize = this.users.length;
            })

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

    public backSortUsers(data ) : void{
        this.sort = data;
        this.personService.getSortUsers(data).pipe(
        ).subscribe(users => {
            this.users = this.mapUsersToTable(
                users.slice(this.pageIndex*this.pageSize, this.pageIndex*this.pageSize + this.pageSize));
        })
    }

    public onPaginationChange(pageEvent): void {

        this.pageIndex = pageEvent.pageIndex;
        this.pageSize = pageEvent.pageSize

        this.personService
            .getSortUsers(this.sort)
            .pipe()
            .subscribe((users) => {
                this.users = this.mapUsersToTable(
                    users.slice(this.pageIndex*this.pageSize, this.pageIndex*this.pageSize + this.pageSize));
        })
    }

}
