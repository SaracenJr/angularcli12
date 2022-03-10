import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatChipInputEvent} from "@angular/material/chips";
import {IPerson} from "../../interfaces/person.interface";
import {IAddressesPerson} from "../../interfaces/personAddresses.interface";
import {IAddress} from "../../interfaces/address.interface";

function input() {

}

@Component({
    selector: 'app-new-user-addresses',
    templateUrl: './new-user-addresses.component.html',
    styleUrls: ['./new-user-addresses.component.css']
})
export class NewUserAddressesComponent implements OnInit {
    //@input() parentFormGroup: FormGroup;
    @Input() editedPersonAddresses;
    @Output() formReady: EventEmitter<FormArray> = new EventEmitter<FormArray>();
    public addresses : FormArray = new FormArray([]);
    public errorMessages: string[] = ['address is required', 'zip is required'];

    constructor() { }

    ngOnInit(): void {
            this.addresses.push(this.createAddressFormGroup());

       // this.onUserAddressFormReady.emit(this.address);
        this.formReady.emit(this.addresses);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.editedPersonAddresses && this.editedPersonAddresses) {
            this.addresses.removeAt(0);
            this.editedPersonAddresses.forEach(address => {
                const form = new FormGroup({
                    addressLine: new FormControl(address.addressLine, Validators.required),
                    city: new FormControl(address.city),
                    zip: new FormControl(address.zip),
                });
                const zipControl = form.get('zip');
                const cityControl = form.get('city');

                cityControl.valueChanges.subscribe((value => {
                    if (value) {
                        zipControl.setValidators(Validators.required);
                    } else {
                        zipControl.clearValidators();
                        zipControl.updateValueAndValidity();
                    }
                }));
                this.addresses.push(form);
            });
        }
    }
    createAddressFormGroup(): FormGroup{
        const form =  new FormGroup({
            addressLine: new FormControl('', Validators.required),
            city: new FormControl(''),
            zip: new FormControl(''),
        });

        const zipControl = form.get('zip');
        const cityControl = form.get('city');

        cityControl.valueChanges.subscribe((value => {
            if(value){
                zipControl.setValidators(Validators.required);
            }else {
                zipControl.clearValidators();
                zipControl.updateValueAndValidity();
            }
        }));
        return form;
    }
    addAddress(){
        this.addresses.push(this.createAddressFormGroup());
    }
    deleteAddress(index: number){
        this.addresses.removeAt(index);
    }
    setZipValidator(zipControl: FormControl): void{
        zipControl.setValidators(Validators.required);
        zipControl.updateValueAndValidity();
        zipControl.markAsTouched();
    }
    cityControl(cityControl: FormControl, zipControl: FormControl): boolean{
        if(!!cityControl.value){
            this.setZipValidator(zipControl);
            return true;
        }else{
            return false;
        }
    }

}
