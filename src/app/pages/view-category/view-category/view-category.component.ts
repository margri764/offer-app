import { CommonModule, Location } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FilterComponent } from "../../filter/filter/filter.component";

@Component({
    selector: 'app-view-category',
    standalone: true,
    templateUrl: './view-category.component.html',
    styleUrl: './view-category.component.scss',
    imports: [CommonModule, RouterModule, FilterComponent]
})
export class ViewCategoryComponent {


  @ViewChild ('display' , {static: true} ) display! : ElementRef;

  phone : boolean = false;
  placeholder : string = "Buscar...";
  selectedFavorite : any;
  title:any;
  category:any


  slides = [
    {img: "assets/meat.png", name: 'CARNICERÍA'},
    {img: "assets/clean.png", name: 'LIMPIEZA'},
    {img: "assets/vegetables.png", name: 'FRUTAS Y VERDURAS'},
    {img: "assets/pets.png", name: 'MASCOTAS'},
    {img: "assets/drinks.png", name: 'BEBIDAS'},
    {img: "assets/store.png", name: 'DESPENSA'},
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
      ( {id} )=>{ this.getCategory(id)})

  }
  ngOnInit(): void {

  }


  getCategory( id:any ){

    this.title = id;
    this.placeholder = `Buscar en ${id}`;

    this.category = this.slides.find( element => element.name === id )
    console.log( this.category);
    

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

