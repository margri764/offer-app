import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../../material.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-active-publication',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterModule],
  templateUrl: './active-publication.component.html',
  styleUrl: './active-publication.component.scss'
})
export class ActivePublicationComponent implements OnInit {
  
  displayedColumns: string[] = ['img', 'title','expirationDate','action'];

  showLabel : boolean = true;

  dataTableActive=[
                    {
                      img: 'assets/drill.jpg',
                      title: "Taladro atornillador",
                      expirationDate: "12/12/2024",
                    },
                    {
                      img: 'assets/clean.png',
                      title: "Semana de la limpieza",
                      expirationDate: "12/12/2024",
                    },
                    {
                      img: 'assets/off1.jpg',
                      title: "Hamburgesas doble queso",
                      expirationDate: "12/12/2024",
                    }
                  ]
  
  ngOnInit(): void {
  }

}
