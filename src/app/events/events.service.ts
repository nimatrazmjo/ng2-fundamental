import {Injectable, EventEmitter} from '@angular/core';
import { EVENTS } from './mock_events';
import {IEvent, ISession} from "./event.model";


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

  searchEvent(term) {
    var termLocal = term.toLocaleLowerCase()
    var results: ISession[] = [];
    EVENTS.forEach(event => {
      var matchingSession = event.sessions.filter(session => session.name.toLocaleLowerCase().indexOf(termLocal) > -1);
      matchingSession = matchingSession.map((session:any) => {
        session.eventId = event.id;
        return session
      })
      results = results.concat(matchingSession)
    })
    var emitter = new EventEmitter(true);
    setTimeout(() => {
      emitter.emit(results)
    },100);
    return emitter
  }
}
