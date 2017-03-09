import { Component, OnInit } from '@angular/core';
import { EventsService } from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  event_parent :any
  constructor(private _eventsService : EventsService) { }

  ngOnInit() {
    this.event_parent = this._eventsService.getEvents()
  }

  RecieveData(data) {
      console.log('Recieved :', data)
  }

}
