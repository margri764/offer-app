import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { MaterialModule } from '../../../material.module';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {




  constructor( private location : Location)
  {}


  
  goBack(){
    this.location.back();
  }


}
