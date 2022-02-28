import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICard} from "./interfaces/card.interface";
import {Router} from "@angular/router";

@Component({
    selector: 'app-card',
    templateUrl: './component-card.component.html',
    styleUrls: ['./component-card.component.css'],
})
export class ComponentCardComponent implements OnInit {
    @Input() card: ICard | undefined;
    @Output() addToFavorite = new EventEmitter<string>();

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    favorite(id?:string) {
        this.addToFavorite.emit(id);
    }

    goto(
        id: string
    ): void {
        this.router.navigate(['/Edit-User', id ]);
    }
}
