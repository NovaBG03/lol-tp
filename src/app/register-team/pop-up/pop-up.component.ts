import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  @Output() closed: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClose(): void {
    this.closed.emit();
  }


}
