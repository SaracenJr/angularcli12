import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

import {MatSort} from "@angular/material/sort";
import {UserData} from "../../containers/users-front-tables-shell/users-front-tables-shell.component";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {Observable} from "rxjs";

@Component({
    selector: 'app-users-front-tables',
    templateUrl: './users-front-tables.component.html',
    styleUrls: ['./users-front-tables.component.css']
})
export class UsersFrontTablesComponent implements OnInit, OnChanges {

    @Input() users: UserData[];

    public dataSource: MatTableDataSource<UserData>;

    public displayedColumns: string[] = ['fullName', 'email', 'age', 'department'];

    @ViewChild(MatSort, { static: false }) sort: MatSort;
    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

    constructor() { }

    ngOnInit(): void {
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.sortData = (data, sort: MatSort) => {
            return this.Sort(data, sort);
        };
    }

    ngOnChanges(changes: SimpleChanges) : void {
        if(changes.users && this.users){
            this.dataSource = new MatTableDataSource(this.users);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            this.dataSource.sortData = (data, sort: MatSort) => {
                return this.Sort(data, sort);
            };
        }
    }

    Sort(data, sort) {
        const active = sort.active;
        const direction = sort.direction;
        if (!active || direction == '') {
            return data;
        }
        function sortingDataAccessor(item, property) {
            let result = item[property];
            if (property === 'fullName') {
                result = `${item.lastName} ${item.firstName}`;
            }
            if (typeof result === 'string') {
                result = result.toLocaleLowerCase();
            }
            return result;
        }

        return data.sort((a, b) => UsersFrontTablesComponent.sorting(
            sortingDataAccessor(a, active),
            sortingDataAccessor(b, active),
            direction
        ));
    }

    static sorting(
        a: any,
        b: any,
        direction?: string
    ) {
        let comparatorResult = 0;
        if (a != null && b != null) {
            if (a > b) {
                comparatorResult = 1;
            } else if (a < b) {
                comparatorResult = -1;
            }
        } else if (a != null) {
            comparatorResult = 1;
        } else if (b != null) {
            comparatorResult = -1;
        }
        return comparatorResult * (direction == 'asc' ? 1 : -1);
    }
}
