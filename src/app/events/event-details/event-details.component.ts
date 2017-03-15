import { Component, OnInit } from '@angular/core';
import { EventsService } from "../events.service";
import { ActivatedRoute } from "@angular/router";
import {IEvent, ISession} from "../event.model";

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: IEvent
  addMode : boolean
  filterBy : string = 'all'
  sortBy : string = 'votes'
  constructor(private _eventService : EventsService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.event = this._eventService.getEvent(+this.route.snapshot.params['id'])
  }

  addSession() {
    this.addMode = true
  }
  new_sessions(session: ISession) {

    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId+1
    console.log(nextId)
    this.event.sessions.push(session)
    this._eventService.updateEvent(session)
    this.addMode= false
  }

  can_session() {
    this.addMode = false
  }
}
