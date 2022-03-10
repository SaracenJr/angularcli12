import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../modules/authorization/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
      public authService: AuthService,
      private router: Router,
  ) { }

  ngOnInit(): void {
  }
  quit(){
      this.authService.removeUser();
      this.router.navigate(['login']);
  }
}