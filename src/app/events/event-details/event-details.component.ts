import { Component, OnInit } from '@angular/core';
import { EventsService } from "../events.service";
import { ActivatedRoute } from "@angular/router";
import {IEvent} from "../event.model";

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: IEvent



  constructor(private _eventService : EventsService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.event = this._eventService.getEvent(+this.route.snapshot.params['id'])
  }

}
