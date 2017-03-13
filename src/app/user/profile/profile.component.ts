import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  formProfile : FormGroup


  constructor(private _authService : AuthService, private router : Router) { }

  ngOnInit() {

    let firstName = new FormControl(this._authService.currentUser.firstName)
    let lastName = new FormControl(this._authService.currentUser.lastName)

    this.formProfile = new FormGroup({
      firstName : firstName,
      lastName : lastName
    })
  }

  saveUser(formValue) {
    this._authService.updateCurrentUser(formValue.firstName, formValue.lastName)
    return this.router.navigate(['/events'])
  }

  cancel () {
    return this.router.navigate(['/events'])
  }
}
