import { CommonModule, Location } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FilterComponent } from "../../filter/filter/filter.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-day-offer-home',
    standalone: true,
    templateUrl: './day-offer-home.component.html',
    styleUrl: './day-offer-home.component.scss',
    imports: [CommonModule, FilterComponent, RouterModule]
})
export class DayOfferHomeComponent {


  @ViewChild ('display' , {static: true} ) display! : ElementRef;

  
  phone : boolean = false;
  placeholder : string = "Buscar en Zig Zag...";
  selectedFavorite : any;


  slides = [
    {img: "assets/zigzag.png", title: 'Zig Zag', address: "Av. Mullally 1894", phone: "0233115462759"},
   
  ];

  
  slides2 = [
    {img: "assets/meat.png", name: 'Carnicerias'},
    {img: "assets/clean.png", name: 'Limpieza'},
    {img: "assets/vegetables.png", name: 'Verdulerías'},
    {img: "assets/pets.png", name: 'Mascotas'},
    {img: "assets/drinks.png", name: 'Bebidas'},
    {img: "assets/store.png", name: 'Despensa'},
  ];


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

  favorite( item:any ){
    this.selectedFavorite = item.name;
  }


}
