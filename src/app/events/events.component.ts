import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  event_parent = {
    id: 1,
    name : 'Angular Connect',
    price : 599.99,
    date : '2017/01/01',
    time : '10 : 00 AM',
    location : {
      address : 'Dashti Barchi',
      city : 'Kabul',
      country : 'Afghanistan'
    }
  }

  constructor() { }

  ngOnInit() {
  }

  RecieveData(data) {
      console.log('Recieved :', data)
  }

}
