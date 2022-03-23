import {Component, OnInit} from '@angular/core';
import {AuthService} from "./modules/authorization/services/auth.service";
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent} from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = 'my';
   // public loading = true;

    constructor(
        //public authService: AuthService,
        private router: Router
    ) {
        /*router.events.subscribe((routerEvent: RouterEvent) => {
            this.checkRouterEvent(routerEvent);
        });*/
    }
/*
    checkRouterEvent(routerEvent: RouterEvent): void {
        if (routerEvent instanceof NavigationStart) {
            this.loading = true;
        }

        if (routerEvent instanceof NavigationEnd ||
            routerEvent instanceof NavigationCancel ||
            routerEvent instanceof NavigationError) {
            this.loading = false;
        }
        console.log('eve', routerEvent);
    }*/
    ngOnInit() {
        if(!localStorage.getItem('users')){
            localStorage.setItem('users', JSON.stringify([]));
        }
    }


}
