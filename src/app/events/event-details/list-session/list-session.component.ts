import {Component, OnInit, Input, OnChanges} from '@angular/core';
import { ISession } from "../../event.model";

@Component({
  selector: 'app-list-session',
  templateUrl: './list-session.component.html',
  styleUrls: ['./list-session.component.css']
})
export class ListSessionComponent implements  OnChanges {
  @Input() all_session: ISession[]
  @Input() filterBy: string
  @Input() sortBy : string
  visible_sessions : ISession[] = []
  constructor() { }

  ngOnChanges() {
     this.filterSession(this.filterBy)
     this.sortBy === 'name' ? this.visible_sessions.sort(SortByNameAsc): this.visible_sessions.sort(SortByVoteDesc)
  }

  filterSession(filterBy) {
    if (filterBy === 'all') {
      this.visible_sessions = this.all_session.slice(0)
    } else {
      this.visible_sessions = this.all_session.filter(session => {
        return session.level.toLocaleLowerCase() === filterBy
      })
    }
  }

}

function SortByNameAsc(s1: ISession, s2: ISession) {
  if(s1.name > s2.name) return 1
  else if (s1.name === s2.name) return 0
  else return -1
}

function SortByVoteDesc(s1 : ISession, s2 : ISession) {
  return s2.voters.length - s1.voters.length
}
