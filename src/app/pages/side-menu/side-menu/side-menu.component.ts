import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { getDataLS } from '../../../shared/storage';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})

export class SideMenuComponent {

  logged : any | null;

  constructor(
              public router : Router
            )
  {
    const user = getDataLS('user');

    if(user){
      this.logged = user;
    }

  }

}
