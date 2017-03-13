import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from "@angular/router";
import { UserRoute } from "./user-route";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoute)
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [

  ]
})


export class UserModule { }
