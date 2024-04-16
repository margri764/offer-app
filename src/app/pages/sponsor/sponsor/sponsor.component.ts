import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sponsor',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sponsor.component.html',
  styleUrl: './sponsor.component.scss'
})
export class SponsorComponent {

  phone: boolean = false;

  slides = [
    {img: "assets/zigzag.png", title: 'Zig Zag', address: "Av. Mullally 1894", phone: "02331 15-46-2759"},
    {img: "assets/avicola.png", title: 'Avícola Realicó', address: "Francia 1672", phone: "02331 15-46-2759"},
    {img: "assets/levin.png", title: 'Levin', address: "Av. Mullally 2002", phone: "02331 15-46-2759"},
   
   
  ];




  constructor(
               
  ) 
  {
    (screen.width <= 800) ? this.phone = true : this.phone = false;
  }



}
