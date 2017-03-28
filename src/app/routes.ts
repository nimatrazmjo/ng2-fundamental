import { Routes } from '@angular/router'
import { EventsComponent } from "./events/events.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { CreateEventComponent } from "./events/create-event/create-event.component";
import { Error404Component } from  "./errors/404.component";
import { EventRouteActivatorService } from "./events/event-details/event-route-activator.service";
import { CreateSessionComponent } from "./events/event-details/create-session/create-session.component";
import { EventListResolverService } from "./events/event-list-resolver.service";

export const appRoutes:Routes = [
  { path : 'events/new', component : CreateEventComponent, canDeactivate: ['canDe-activeEvent'] },
  { path : 'events', component : EventsComponent, resolve : { events : EventListResolverService }},
  { path : 'events/:id', component : EventDetailsComponent, canActivate : [EventRouteActivatorService] },
  { path : '404', component : Error404Component },
  { path : '', redirectTo: '/events', pathMatch: 'full' },
  { path : 'user', loadChildren : './user/user.module#UserModule' },
  { path : 'events/session/create', component : CreateSessionComponent }
]
