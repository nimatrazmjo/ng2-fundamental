import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventsService } from "../events.service";

@Injectable()
export class EventRouteActivatorService  implements CanActivate{

  constructor(private router :Router, private eventService : EventsService) { }

  canActivate (route : ActivatedRouteSnapshot) {
      const evenExist = !! this.eventService.getEvent(+route.params['id'])

      if(!evenExist)
         this.router.navigate(['404'])
      return evenExist
  }
}
