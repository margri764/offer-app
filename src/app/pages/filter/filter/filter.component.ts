import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit {


constructor(
            public router : Router
          )
{}

  ngOnInit(): void {
  }

}
