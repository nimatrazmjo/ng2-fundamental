import { Injectable } from '@angular/core';
import { EVENTS } from './mock_events';
import {IEvent} from "./event.model";


@Injectable()
export class EventsService {

  constructor() { }

  getEvents () {
    return EVENTS
  }

  getEvent(id:number):IEvent {
    return EVENTS.find(event => event.id === id)
  }
}


