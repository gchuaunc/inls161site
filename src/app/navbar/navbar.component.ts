import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() isMobile = false;
  @ViewChild('menu') menu: any;

  ngOnChanges(changes: SimpleChanges) {
    this.isMobile = changes["isMobile"].currentValue;
  }
}
