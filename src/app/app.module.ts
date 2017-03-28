import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404.component";
import { DurationPipe } from './shared/duration.pipe';
import {AuthService} from "./user/auth.service";
import {
  CollapsibleWellComponent,
  TOASTR_TOKEN,
  Toastr,
  JQ_TOKEN,
  SimpleModalComponent,
  ModalTriggerDirective
} from './common/index';


import {
  EventsComponent,
  EventThumbnailComponent,
  EventsService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivatorService,
  CreateSessionComponent,
  ListSessionComponent,
  UpvoteComponent,
  VoteService,
  LocationValidatorDirective
} from "./events/index";

declare let toastr : Toastr;
declare let jQuery : Object;

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    ListSessionComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventsService,
    EventRouteActivatorService,
    VoteService,
    AuthService,
    { provide : TOASTR_TOKEN, useValue : toastr},
    { provide : JQ_TOKEN, useValue : jQuery},
    { provide : 'canDe-activeEvent', useValue : checkDirtySide}
  ],
  bootstrap:
    [AppComponent]
})


export class AppModule { }


export function checkDirtySide(component: CreateEventComponent) {
  if(component.Dirty)
      return window.confirm(" You have not saved this event, do you really want to cancel ?")
  return true
}
