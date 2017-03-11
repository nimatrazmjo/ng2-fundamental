import { Routes } from '@angular/router'
import { EventsComponent } from "./events/events.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";

export const appRoutes:Routes = [
  { path : 'events', component : EventsComponent },
  { path : 'events/:id', component : EventDetailsComponent },
  { path : '', redirectTo: '/events', pathMatch: 'full' }
]
