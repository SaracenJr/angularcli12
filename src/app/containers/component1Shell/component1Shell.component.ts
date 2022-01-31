import { Component, OnInit } from '@angular/core';
import { iPerson} from '../../service/iPerson';
import { PersonServiceService } from '../../service/person-service.service';

@Component({
    selector: 'app-component1',
    templateUrl: './component1Shell.component.html',
    styleUrls: ['./component1Shell.component.css']
})
export class Component1ShellComponent implements OnInit {

    public personsFiltered: iPerson[] = [];//persons;

    constructor(
        public persons: PersonServiceService,
    ) { }

    onlyActive(){
        this.personsFiltered = this.persons.getPersons().filter((person) => person.activated);
    }
    deactivateAll(){
        this.persons.deactivateAll();
        this.personsFiltered = this.persons.getPersons();
            console.log(this.personsFiltered);
    }

    changeActive(id: number){
        this.persons.changeActive(id);
    }

    ngOnInit(): void {
        this.personsFiltered = this.persons.getPersons();
    }
}
