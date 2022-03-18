import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

import {MatSort} from "@angular/material/sort";
import {UserData} from "../../containers/users-front-tables-shell/users-front-tables-shell.component";

@Component({
    selector: 'app-users-tables',
    templateUrl: './users-tables.component.html',
    styleUrls: ['./users-tables.component.css']
})
export class UsersTablesComponent implements OnInit, OnChanges {
    @Input() displayedColumns : string[];
    @Input() dataSource: MatTableDataSource<UserData>;
    @Input() tableType : string;

    @Output() sortEvent = new EventEmitter<object>();

    @ViewChild(MatSort, { static: false }) sort: MatSort;

    constructor() { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges) : void {
        if(changes.dataSource && this.dataSource && this.tableType === 'front'){
            this.dataSource.sort = this.sort;
        }

    }
    sortData(data): void {
        if(this.tableType === 'back'){
            this.sortEvent.emit(data);
        }
    }

}
