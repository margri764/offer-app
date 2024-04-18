import { CommonModule, Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FilterComponent } from "../../filter/filter/filter.component";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-view-sponsor',
    standalone: true,
    templateUrl: './view-sponsor.component.html',
    styleUrl: './view-sponsor.component.scss',
    imports: [CommonModule, FilterComponent]
})
export class ViewSponsorComponent implements OnInit{


  @ViewChild ('display' , {static: true} ) display! : ElementRef;

  phone : boolean = false;
  placeholder : string = "Buscar en Zig Zag...";
  selectedFavorite : any;
  title:any;
  sponsor:any


  slides = [
    {img: "assets/zigzag.png", title: 'Zig Zag', address: "Av. Mullally 1894", phone: "02331 15-46-2759"},
    {img: "assets/avicola.png", title: 'Avícola Realicó', address: "Francia 1672", phone: "02331 15-46-2759"},
    {img: "assets/levin.png", title: 'Levin', address: "Av. Mullally 2002", phone: "02331 15-46-2759"},
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
              private location : Location,
              private activatedRoute :  ActivatedRoute
            )
  {
    (screen.width <= 800) ? this.phone = true : this.phone = false;
    this.goToTop();

    this.activatedRoute.params.subscribe(
      ( {id} )=>{ this.getSponsor(id)})

  }
  ngOnInit(): void {

  }


  getSponsor( id:any ){

    this.title = id;

    this.sponsor = this.slides.find( element => element.title === id )
    console.log( this.sponsor);
    

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
