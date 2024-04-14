import { Component, OnInit, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  SlickCarouselModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateSlidesToShow(); // Llamar al método cuando se redimensione la ventana
  }


  title = 'offer-app';
  slidesToShow: number = 2; // Inicializar con un valor predeterminado

  slides = [
    {img: "../assets/meat.png", name: 'CARNICERÍA'},
    {img: "../assets/clean.png", name: 'LIMPIEZA'},
    {img: "../assets/vegetables.png", name: 'FRUTAS Y VERDURAS'},
    {img: "../assets/pets.png", name: 'MASCOTAS'},
    {img: "../assets/drinks.png", name: 'BEBIDAS'},
    {img: "../assets/store.png", name: 'DESPENSA'},
  ];

  slideConfig = {
    slidesToShow: this.slidesToShow,
    slidesToScroll: 1,
    arrows: true, 
  };

  constructor() {}

  ngOnInit(): void {
    this.updateSlidesToShow(); // Llamar al método para inicializar la cantidad de diapositivas
  }


  updateSlidesToShow() {
    this.slidesToShow = (window.innerWidth < 1600) ? 3 : 4; // Actualizar la cantidad de diapositivas según el tamaño de la pantalla
    this.slideConfig.slidesToShow = this.slidesToShow; // Actualizar la configuración del carousel
  }
}
