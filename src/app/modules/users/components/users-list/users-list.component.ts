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

import {ICard} from "../../../../shared/components/component-card/interfaces/card.interface";

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit, OnChanges {
    @Input() cards: ICard[] = [];
    @Input() favoriteCards: ICard[] = [];
    @Output() addFavorite = new EventEmitter<number>();

    constructor() { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
    }

    addToFavorite(id?:number) : void {
        this.addFavorite.emit(id);
    }
}
