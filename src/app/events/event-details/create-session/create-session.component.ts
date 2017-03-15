import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ISession } from "../../event.model";
import {FormControl, Validators, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  @Output() add_sessions = new EventEmitter()
  @Output() cancelAddSession = new EventEmitter()
  sessionFrom: FormGroup
  name : FormControl
  presenter : FormControl
  duration : FormControl
  level : FormControl
  abstract : FormControl

  constructor() { }

  ngOnInit() {
      this.name = new FormControl('', Validators.required),
      this.presenter = new FormControl('', Validators.required),
      this.duration = new FormControl('', Validators.required),
      this.level = new FormControl('', Validators.required),
      this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)])
      this.sessionFrom = new FormGroup({
        name : this.name,
        presenter : this.presenter,
        duration : this.duration,
        level : this.level,
        abstract : this.abstract
      })
  }

  saveSession(formValue) {
    let session: ISession = {
      name : formValue.name,
      presenter : formValue.presenter,
      duration : +formValue.duration,
      level : formValue.level,
      abstract : formValue.abstract,
      id : undefined,
      voters : []
    }
    this.add_sessions.emit(session)
  }

  cancel() {
    this.cancelAddSession.emit()
  }
}
