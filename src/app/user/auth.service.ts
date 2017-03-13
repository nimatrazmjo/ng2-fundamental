import { Injectable } from '@angular/core';
import {IUser} from "./user.model";

@Injectable()
export class AuthService {

  currentUser : IUser


  constructor() {
    this.currentUser = {
      id : 1,
      firstName : 'Nimatullah',
      lastName : 'Razmjo',
      userName :'nimat',

    }
  }

  isAuthenticate() {
    return !!this.currentUser
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName
    this.currentUser.lastName = lastName

    console.log(this.currentUser)
  }
}
