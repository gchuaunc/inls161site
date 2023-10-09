import { Component, ElementRef, Input } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('previous', style({ transform: 'translateX(-100%)' })),
      state('next', style({ transform: 'translateX(100%)' })),
      state('idle', style({ transform: 'translateX(0%)' })),
      state('hidden', style({ transform: 'translateX(0%)'})),
      transition('* => idle', animate('300ms ease-out')),
      transition('idle => *', animate('300ms ease-out')),
    ]),
  ]
})
export class ImageCarouselComponent {
  @Input({ required: true }) images: { url: string, alt: string }[] = [];
  currentIndex: number = 0;
  animationState: string[] = [];
  @Input({ required: true }) height: number = 300;

  ngOnInit() {
    if (this.images.length == 0) {
      console.warn("ImageCarouselComponent has no images to display");
      return;
    }

    this.animationState = this.animationState.concat("idle")
    for (let i = 1; i < this.images.length; i++) {
      this.animationState = this.animationState.concat("hidden");
    }
  }

  prevSlide() {
    let last = this.currentIndex;
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;

    this.animationState[last] = 'next';
    setTimeout(() => {
      this.animationState[last] = 'hidden';
    }, 300);

    this.animationState[this.currentIndex] = 'previous';
    setTimeout(() => {
      this.animationState[this.currentIndex] = 'idle';
    }, 10);
    setTimeout(() => {
      this.animationState[this.currentIndex] = 'idle';
    }, 300);
  }

  nextSlide() {
    let last = this.currentIndex;
    this.currentIndex = (this.currentIndex + 1) % this.images.length;

    this.animationState[last] = 'previous';
    setTimeout(() => {
      this.animationState[last] = 'hidden';
    }, 300);

    this.animationState[this.currentIndex] = 'next';
    setTimeout(() => {
      this.animationState[this.currentIndex] = 'idle';
    }, 10)
    setTimeout(() => {
      this.animationState[this.currentIndex] = 'idle';
    }, 300);
  }
}
