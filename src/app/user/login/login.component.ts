import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  login (formValue) {
    console.log(formValue)
  }

  cancel ()
  {
    this.router.navigate(['/events'])
  }
}
