import { CommonModule, Location } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../../material.module';
import { BooleanInput } from '@angular/cdk/coercion';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MaterialModule, MatSidenavModule, MatButtonModule],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.scss'
})
export class AdminHomeComponent {
 
  @ViewChild ('display' , {static: true} ) display! : ElementRef;

  phone : boolean = false;
  placeholder : string = "Buscar en anunciantes...";
  selectedFavorite : any;




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
              public router : Router
            )
  {
    (screen.width <= 800) ? this.phone = true : this.phone = false;
    this.goToTop();
  //   this.breakpoint$.subscribe(() =>
  //     this.breakpointChanges()
  // );

  }

  breakpointChanges(): void {

    // if (this.breakpointObserver.isMatched('(max-width: 500px)')) {
    //   this.drawerMode = "over";
    //   this.mdcBackdrop = true;
    // } else {
    //   this.drawerMode = "push";
    //   this.mdcBackdrop = false;
    // }
    
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

