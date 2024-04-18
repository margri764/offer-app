import { CommonModule, Location } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {

  @ViewChild ('display' , {static: true} ) display! : ElementRef;

  
  phone : boolean = false;
  selectedFavorite : any;

  // slides = [
  //   {img: "assets/meat.png", name: 'CARNICERÍA'},
  //   {img: "assets/clean.png", name: 'LIMPIEZA'},
  //   {img: "assets/vegetables.png", name: 'FRUTAS Y VERDURAS'},
  //   {img: "assets/pets.png", name: 'MASCOTAS'},
  //   {img: "assets/drinks.png", name: 'BEBIDAS'},
  //   {img: "assets/store.png", name: 'DESPENSA'},
  // ];


  notifications = [
    {
      category: "Oferta programada",
      img: "assets/meat.png",
      message: "Hoy tenes oferta en alimentos de mascotas",
      date: "13/09"
    },
    {
      category: "Oferta relampago",
      img: "assets/clean.png",
      message: "No te pierdas la oferta relampago en limpieza",
      date: "14/09"
    },
    {
      category: "Vouchers",
      img: "assets/voucher.jpg",
      message: "Tenes un voucher esperando",
      date: "14/09"
    },

  ]

  constructor(
              private location : Location
            )
  {
    (screen.width <= 800) ? this.phone = true : this.phone = false;
    this.goToTop();

  }


  goToTop(){
    setTimeout( () => {
      this.display.nativeElement.scrollIntoView(
      { 
        alignToTop: true,
        block: "center",
      });
     }
    )
  }

  goBack(){
    this.location.back();
  }


}

