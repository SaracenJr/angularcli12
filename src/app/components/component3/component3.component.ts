import {Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

import {iPerson} from "../../service/iPerson";

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component3Component implements OnInit {
    @Input() person: iPerson | undefined;
    @Output() onActiveChange = new EventEmitter<number>();
    change(id?:number) {
        this.onActiveChange.emit(id);
    }
    constructor() { }
    ngOnInit(): void {
    }

}
