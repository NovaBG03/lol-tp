import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isTop = true;
  isLoading = false;

  @HostListener('window:scroll') onScroll(): void {
    this.isTop = window.scrollY < 10;
  }
}
