import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {personInterface} from "../../../modules/users/interfaces/person.interface";

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent implements OnInit {
    @Input() person: personInterface | undefined;
    @Output() onActiveChange = new EventEmitter<number>();

    constructor() { }

    ngOnInit(): void {
    }

    change(id?:number) {
        this.onActiveChange.emit(id);
    }
}
