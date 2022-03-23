import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {UserData} from "../../containers/users-front-tables-shell/users-front-tables-shell.component";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator, PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-users-back-tables',
  templateUrl: './users-back-tables.component.html',
  styleUrls: ['./users-back-tables.component.css']
})
export class UsersBackTablesComponent implements OnInit {

    @Input() users: UserData[];
    @Input() pageSize: number ;
    @Input() totalSize: number;
    @Input() pageIndex: number;

    @Output() sortEvent = new EventEmitter<object>();
    @Output() pageEvent = new EventEmitter<object>();

    public dataSource: MatTableDataSource<UserData>;

    public displayedColumns: string[] = ['fullName', 'email', 'age', 'department'];


    @ViewChild(MatSort, { static: false }) sort: MatSort;
    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

    constructor() { }

    ngOnInit(): void {
        this.dataSource = new MatTableDataSource(this.users);
    }

    ngOnChanges(changes: SimpleChanges) : void {
        if(changes.users && this.users){
            this.dataSource = new MatTableDataSource(this.users);
        }

    }

    sortData(data): void {
            this.sortEvent.emit(data);
    }

    public onPaginationChange(pageEvent: PageEvent): void {
            this.pageEvent.emit(pageEvent);
    }


}
