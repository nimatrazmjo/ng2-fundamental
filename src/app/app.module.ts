import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from './events/events.service';
import { ToastrService } from "./common/toastr.service";
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from "./routes";
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from "./errors/404.component";
import { EventRouteActivatorService } from "./events/event-details/event-route-activator.service";

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventsService,
    ToastrService,
    EventRouteActivatorService,
    { provide : 'canDe-activeEvent', useValue : checkDirtySide}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function checkDirtySide(component: CreateEventComponent) {
  if(component.Dirty)
      return window.confirm(" You have not saved this event, do you really want to cancel ?")
  return true
}
