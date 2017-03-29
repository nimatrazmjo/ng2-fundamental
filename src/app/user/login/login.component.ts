import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginStatus = true
  constructor(private router : Router, private _authService : AuthService) { }

  ngOnInit() {
  }

  login (formValue) {
    this._authService.login(formValue.username, formValue.password).subscribe(resp => {
      if(!resp) {
        this.loginStatus = false
      } else {
        this.loginStatus = true
        this.router.navigate(['/events'])
      }
    })
  }

  cancel ()
  {
    this.router.navigate(['/events'])
  }
}
