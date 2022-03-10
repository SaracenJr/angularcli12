import {Component, OnInit} from '@angular/core';
import {AuthService} from "./modules/authorization/services/auth.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = 'my';
    constructor(
        public authService: AuthService
    ) {
    }
    ngOnInit() {
      //  localStorage.setItem('users', JSON.stringify([]));
    }
    checkHeader() : boolean {
       // this.authService.getUser().subscribe(data => {return !!data});
        return this.authService.getUser();
    }

}
