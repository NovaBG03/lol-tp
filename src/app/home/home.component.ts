import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isTop = true;
  isLoading = false;

  constructor() {
  }

  @HostListener('window:scroll') onScroll(): void {
    this.isTop = window.scrollY < 10;
  }

  ngOnInit(): void {
  }

}
