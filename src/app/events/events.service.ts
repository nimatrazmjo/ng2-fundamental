import { Injectable } from '@angular/core';
import { EVENTS } from './mock_events';


@Injectable()
export class EventsService {

  constructor() { }

  getEvents () {
    return EVENTS
  }

  getEvent(id:number) {
    return EVENTS.find(event => event.id === id)
  }
}


