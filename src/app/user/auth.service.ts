import { Injectable } from '@angular/core';
import {IUser} from "./user.model";
import {Headers, Http, RequestOptions} from "@angular/http";
import { Router } from "@angular/router";
import 'rxjs';
import {Observable} from "rxjs";

@Injectable()
export class AuthService {

 public currentUser : IUser


  constructor(private http : Http, private router : Router) {
  }

  login (username : string, password : string) {
    let headers = new Headers({'Content-Type': 'application/json'})
    let option = new RequestOptions({headers: headers})
    let loginInfo = {email: username, password: password}
    return this.http.post("/server/login", JSON.stringify(loginInfo), option)
      .do(res => {
        if (res) {
          this.currentUser = res.json();
        }
      }).catch( error => {
        return Observable.of(false)
      });

  }
  isAuthenticate() {

    return !!this.currentUser
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName
    this.currentUser.lastName = lastName
  }
}
