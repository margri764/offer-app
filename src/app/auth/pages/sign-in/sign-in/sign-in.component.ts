import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MaterialModule } from '../../../../material.module';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  constructor(
               private _bottomSheet: MatBottomSheet,
              private router :  Router  
) { }


closeBottomSheet(){
this._bottomSheet.dismiss();
}

ngOnInit(): void {
}



}
