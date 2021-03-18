import {Component, Input, OnInit} from '@angular/core';
import {FeedbackProfileData} from './feedback-profile-data';

@Component({
  selector: 'app-feedback-profile',
  templateUrl: './feedback-profile.component.html',
  styleUrls: ['./feedback-profile.component.css']
})
export class FeedbackProfileComponent implements OnInit {

  @Input() data: FeedbackProfileData;

  constructor() { }

  ngOnInit(): void {
  }

  get starArray(): any[] {
    return Array(this.data.stars);
  }

}
