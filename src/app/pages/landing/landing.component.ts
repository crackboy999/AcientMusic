import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  @ViewChild('navbarC') myNavbar: ElementRef;

  focus: any;
  focus1: any;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.listen('window', 'scroll', (event) => {
      const numberScroll = window.scrollY;
      if (numberScroll > 150 || window.pageYOffset > 150) {
          // add logic
          this.renderer.removeClass(this.myNavbar.nativeElement, 'navbar-transparent');
      } else {
          // remove logic
          this.renderer.addClass(this.myNavbar.nativeElement, 'navbar-transparent');
      }
  });
  }

}
