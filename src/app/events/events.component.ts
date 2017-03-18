import { Component, OnInit } from '@angular/core';
import { EventsService } from './events.service';
import {IEvent} from "./event.model";


@Component({
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  event_parent :IEvent[]
  constructor(private _eventsService : EventsService) { }

  ngOnInit() {
    this.event_parent = this._eventsService.getEvents()
  }

  RecieveData(data) {
      console.log('Recieved :', data)
  }
}
