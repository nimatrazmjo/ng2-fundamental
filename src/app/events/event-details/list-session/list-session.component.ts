import {Component, OnInit, Input} from '@angular/core';
import { ISession } from "../../event.model";

@Component({
  selector: 'app-list-session',
  templateUrl: './list-session.component.html',
  styleUrls: ['./list-session.component.css']
})
export class ListSessionComponent implements OnInit {
  @Input() all_session: ISession
  constructor() { }

  ngOnInit() {
  }

}
