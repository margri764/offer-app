import { Component, OnInit, HostListener, ElementRef, Renderer2, AfterViewInit, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';
import { FooterComponent } from "./pages/footer/footer/footer.component";
import { CommonModule } from '@angular/common';
import { StartingPageComponent } from "./pages/starting-page/starting-page/starting-page.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, SlickCarouselModule, FooterComponent, CommonModule, StartingPageComponent]
})
export class AppComponent implements OnInit {

  // disabled : boolean = true;
  disabled : boolean = false;

 
  constructor(
              public router: Router,
  ) 
  {}

  ngOnInit(): void {

    setTimeout(()=>{
      this.disabled = true;
    }, 2500)
   
    
  }

}
