import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';

import {personInterface} from "../../interfaces/person.interface";

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit, OnChanges {
    @Input() persons: personInterface[] = [];
    @Output() onActiveChange = new EventEmitter<number>();

    constructor() { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!changes.persons.firstChange) {
            console.log('Persons were changed', this.persons);
        }
    }

    changeActive(id?:number) {
        this.onActiveChange.emit(id);
    }
}
