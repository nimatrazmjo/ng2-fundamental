import {Component, OnInit, Input, ViewChild, ElementRef, Inject} from '@angular/core';
import {JQ_TOKEN} from "../jquery.service";

@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {
  @Input() title: String
  @Input() elementId: String
  @ViewChild('modalContainer') containEl : ElementRef
  @Input() closeOnBody: string
  constructor(@Inject(JQ_TOKEN) private $:any) { }

  ngOnInit() {

  }

  closeModal()
  {
    if (this.closeOnBody.toLocaleLowerCase() === 'true') {
      this.$(this.containEl.nativeElement).modal('hide')
    }
  }

}
