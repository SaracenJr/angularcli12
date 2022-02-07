import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICard} from "./interfaces/card.interface";

@Component({
    selector: 'app-card',
    templateUrl: './component-card.component.html',
    styleUrls: ['./component-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentCardComponent implements OnInit {
    @Input() card: ICard | undefined;
    @Output() addToFavorite = new EventEmitter<number>();

    constructor() { }

    ngOnInit(): void {
    }

    favorite(id?:number) {
        this.addToFavorite.emit(id);
    }
}
