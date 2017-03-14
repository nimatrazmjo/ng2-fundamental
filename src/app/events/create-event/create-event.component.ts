import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { IEvent } from "../event.model";
import { EventsService } from "../events.service";

@Component({
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  Dirty:boolean = false
  eventModel:IEvent

  constructor(private  router : Router,private _eventService: EventsService) { }

  ngOnInit() {
  }


  saveEvent(formvalue) {
    this._eventService.saveForm(formvalue)
    this.router.navigate(['/events'])
  }

  cancel () {
    this.router.navigate(['/events'])
  }
}
