import { Component } from '@angular/core';
import { ISession } from "../events/event.model";
import { EventsService } from "../events/events.service";
@Component({
  selector : 'app-nav',
  templateUrl : './nav.component.html',
  styleUrls : ['./nav.component.css']
})
export class NavComponent {
  searchTerm : string;
  foundSession : ISession[] = []
  constructor (private eventService : EventsService) {

  }
  searchSession (searchTerm) {
    this.eventService.searchEvent(searchTerm).subscribe(sessions => {
      this.foundSession = sessions;
      console.log(this.foundSession)
    })

  }
}
