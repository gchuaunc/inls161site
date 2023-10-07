import { Component } from '@angular/core';

@Component({
  selector: 'app-programming',
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.scss']
})
export class ProgrammingComponent {
  cgixeosImages = [
    { url: "/assets/programming/cgixeos1.png", alt: "Image 1 of cgixe os terminal program", height: 250 },
    { url: "/assets/programming/cgixeos2.png", alt: "Image 2 of cgixe os terminal program", height: 196 },
    { url: "/assets/programming/cgixeos3.png", alt: "Image 3 of cgixe os terminal program", height: 269 },
    { url: "/assets/programming/cgixeos4.png", alt: "Image 4 of cgixe os terminal program", height: 318 }
  ];
}
