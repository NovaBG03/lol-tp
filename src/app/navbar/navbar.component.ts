import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() isTop = true;
  isMenuOpen = false;
  isSocialOpen = false;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  clickedOutside(event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeMenu();
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.isSocialOpen = false;
  }

  toggleSocial(): void {
    this.isSocialOpen = !this.isSocialOpen;
  }
}
