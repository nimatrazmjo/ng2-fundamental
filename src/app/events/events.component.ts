import { Component, OnInit } from '@angular/core';
import { EventsService } from './events.service';
import { IEvent } from "./event.model";
import { ActivatedRoute } from "@angular/router";


@Component({
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  event_parent :IEvent[]
  constructor(private _eventsService : EventsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.event_parent = this.route.snapshot.data['events']
  }

  RecieveData(data) {
      console.log('Recieved :', data)
  }
}
