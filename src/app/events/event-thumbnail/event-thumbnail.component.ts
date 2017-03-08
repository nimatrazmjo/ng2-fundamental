import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input()  event: any;
  @Output() EventClick = new EventEmitter();

  child_text = 'This text is from child component'

  constructor() { }

  ngOnInit() {
  }
  clikedMe() {
    this.EventClick.emit(this.event.name)
  }

}
