import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inls161site';
  isMobile: boolean = false;

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit() {
    this.responsive.observe([Breakpoints.Small, Breakpoints.XSmall, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .subscribe(result => {
        const breakpoints = result.breakpoints;

        if (breakpoints[Breakpoints.Small] || breakpoints[Breakpoints.XSmall]) {
          // change to mobile layout
          this.isMobile = true;
        } else if (breakpoints[Breakpoints.Medium] || breakpoints[Breakpoints.Large] || breakpoints[Breakpoints.XLarge]) {
          // change to desktop layout
          this.isMobile = false;
        }
      });
  }
}
