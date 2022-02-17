import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatChipInputEvent} from "@angular/material/chips";
import {IPerson} from "../../interfaces/person.interface";
import {IAddressesPerson} from "../../interfaces/personAddresses.interface";

@Component({
    selector: 'app-new-user-addresses',
    templateUrl: './new-user-addresses.component.html',
    styleUrls: ['./new-user-addresses.component.css']
})
export class NewUserAddressesComponent implements OnInit {
    @Output() formReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    addressForm = new FormGroup({
        addresses: new FormControl([])
    });
    addresses: string[] = [];

    add(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();

        // Add our fruit
        if (value) {
            this.addresses.push(value);
            this.addressForm.controls.addresses.patchValue([...this.addresses]);
        }

        // Clear the input value
        event.chipInput!.clear();
    }

    remove(fruit: string): void {
        const index = this.addresses.indexOf(fruit);

        if (index >= 0) {
            this.addresses.splice(index, 1);
            this.addressForm.controls.addresses.patchValue([...this.addresses]);
        }
    }
    constructor() { }

    ngOnInit(): void {
        this.formReady.emit(this.addressForm);
    }

}
