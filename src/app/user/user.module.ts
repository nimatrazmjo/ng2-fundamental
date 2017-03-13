import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ProfileComponent } from './profile/profile.component';
import { UserRoute } from "./user-route";
import { LoginComponent } from './login/login.component';
import { AuthService } from "./auth.service";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(UserRoute)
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  providers: [
    AuthService
  ]
})


export class UserModule { }
