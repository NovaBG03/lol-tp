import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isTop = true;

  @HostListener('window:scroll') onScroll(): void {
    this.isTop = window.scrollY < 10;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
