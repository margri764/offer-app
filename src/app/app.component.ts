import { Component, OnInit, HostListener, ElementRef, Renderer2, AfterViewInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';
import { FooterComponent } from "./pages/footer/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, SlickCarouselModule, FooterComponent]
})
export class AppComponent implements OnInit {


 
  constructor(
                   private elRef: ElementRef, 
                   private renderer: Renderer2
  ) 
  {}

  ngOnInit(): void {
    // this.updateSlidesToShow(); // Llamar al método para inicializar la cantidad de diapositivas
  }

}
