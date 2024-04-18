import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login/login.component';
import { RegisterComponent } from './pages/register/register/register.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [
        { path: 'login',  component: LoginComponent, data:{ title:"login"}},
        { path: 'sign-up',  component: RegisterComponent, data:{ title:"register"}},
        { path: 'terminos-y-condiciones',  component: TermsAndConditionsComponent, data:{ title:"consent"}},

];



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],

exports: [ RouterModule ],
})
export class AuthRoutingModule { }
