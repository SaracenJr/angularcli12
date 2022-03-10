import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    @Output() formLog = new EventEmitter<FormGroup>();

    public loginForm: FormGroup = new FormGroup({
        userName: new FormControl('', Validators.required),
        password: new FormControl(null, Validators.required),
    });

  constructor() { }

  ngOnInit(): void {
      this.formLog.emit(this.loginForm);
  }

}
