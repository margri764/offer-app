import { CommonModule, Location } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FilterComponent } from "../../filter/filter/filter.component";

@Component({
    selector: 'app-sponsor-home',
    standalone: true,
    templateUrl: './sponsor-home.component.html',
    styleUrl: './sponsor-home.component.scss',
    imports: [CommonModule, FilterComponent]
})
export class SponsorHomeComponent {
  
  @ViewChild ('display' , {static: true} ) display! : ElementRef;

  phone : boolean = false;
  placeholder : string = "Buscar en Zig Zag...";
  selectedFavorite : any;


  slides = [
    {img: "assets/zigzag.png", title: 'Zig Zag', address: "Av. Mullally 1894", phone: "0233115462759"},
   
  ];

  
  slides2 = [
    {img: "assets/meat.png", name: '2kg de Marucha'},
    {img: "assets/clean.png", name: 'Kit de limpieza'},
    {img: "assets/vegetables.png", name: 'Manzanas de Rio Negro'},
    {img: "assets/pets.png", name: 'Alimento balanceado por 25kg'},
    {img: "assets/drinks.png", name: 'Vino tinto malbec Otro Loco Suelto'},
    {img: "assets/store.png", name: 'Sal entrefina dos anclas'},
  ];


  constructor(
              private location : Location
            )
  {
    (screen.width <= 800) ? this.phone = true : this.phone = false;
    this.goToTop()

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
