import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import {ViewportScroller} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isTop = true;

  constructor() {
  }

  @HostListener('window:scroll') onScroll(): void {
    this.isTop = window.scrollY < 10;
  }

  ngOnInit(): void {
  }

}
