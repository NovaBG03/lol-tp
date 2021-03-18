import {Component, Input, OnInit} from '@angular/core';
import {CardFeatureData} from './card-feature-data';

@Component({
  selector: 'app-card-feature',
  templateUrl: './card-feature.component.html',
  styleUrls: ['./card-feature.component.css']
})
export class CardFeatureComponent implements OnInit {
  @Input() data: CardFeatureData;

  constructor() { }

  ngOnInit(): void {
  }

}
