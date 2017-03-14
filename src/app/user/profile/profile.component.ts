import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  formProfile : FormGroup
  firstName : FormControl
  lastName : FormControl

  constructor(private _authService : AuthService, private router : Router) { }

  ngOnInit() {

    this.firstName = new FormControl(this._authService.currentUser.firstName , [Validators.required, Validators.pattern('[a-zA-Z].*')])
    this.lastName = new FormControl(this._authService.currentUser.lastName, Validators.required)

    this.formProfile = new FormGroup({
      firstName : this.firstName,
      lastName : this.lastName
    })
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched
  }

  validateLastName () {
    return this.lastName.valid || this.lastName.untouched
  }
  saveUser(formValue) {
    this._authService.updateCurrentUser(formValue.firstName, formValue.lastName)
    return this.router.navigate(['/events'])
  }

  cancel () {
    return this.router.navigate(['/events'])
  }
}
