import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-error-pop-up',
  templateUrl: './error-pop-up.component.html',
  styleUrls: ['./error-pop-up.component.css']
})
export class ErrorPopUpComponent implements OnInit {

  @Output() closed: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClose(): void {
    this.closed.emit();
  }

}
