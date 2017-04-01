import { Injectable, EventEmitter } from '@angular/core';
import { EVENTS } from './mock_events';
import { IEvent, ISession } from "./event.model";
import {Http, Response, Headers, Request, RequestOptions} from "@angular/http";
import { Observable } from "rxjs";


@Injectable()
export class EventsService {

  constructor(private http : Http) { }


  getEvents (): Observable<IEvent[]> {
    return this.http.get('/server/api/events').map((response : Response) => {
        return <IEvent[]>response.json()
    }).catch(this.HandleError)
  }


  getEvent(id:number):IEvent {
    return EVENTS.find(event => event.id === id)
  }


  saveForm(event): Observable<IEvent> {
    let headers = new Headers({'Content-Type':'application/json'})
    let options = new RequestOptions({headers : headers})

    return this.http.post('/server/api/events',JSON.stringify(event),options).map((response: Response)=> {
      return response.json()
    }).catch(this.HandleError)
  }


  updateEvent(event) {
    let index = EVENTS.findIndex(x => x.id = event.id)
    EVENTS[index] = event
  }


  searchEvent(term) {
    return this.http.get('/api/sessions/search?search=' + term).map((response :  Response)=>{
      return response.json()
    })
  }


  private HandleError(error: Response) {
    return Observable.throw(error.statusText)
  }
}
