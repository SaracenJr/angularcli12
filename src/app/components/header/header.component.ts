import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../modules/authorization/services/auth.service";
import {Router, RouterEvent, Event, NavigationStart, NavigationEnd} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public title: string;
    public userName: string ;
    public id: string;

  constructor(
      public authService: AuthService,
      public router: Router,
  ) {
      router.events.subscribe((routerEvent: RouterEvent) => {
          if (routerEvent instanceof NavigationEnd) {
              this.createTitle();
          }
      });
  }

  ngOnInit(): void {
      this.createUserName();
  }

  quit(){
      this.authService.removeLoggedUser().subscribe(_ => {
          this.router.navigate(['login']);
      });
  }
  createTitle(){
        this.title = this.router.routerState.snapshot.url.slice(1);
  }
  createUserName(){
        this.authService.getLoggedUser().subscribe((user) => {
            if(user.name){
                this.userName = user.name;
            }
        })
  }
}
