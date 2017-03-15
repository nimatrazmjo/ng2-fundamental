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

  saveForm(event) {
    event.id = 999
    event.session = []
    EVENTS.push(event)
  }

  updateEvent(event) {
    let index = EVENTS.findIndex(x => x.id = event.id)
    EVENTS[index] = event
  }
}
