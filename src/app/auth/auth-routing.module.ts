import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login/login.component';
import { RegisterComponent } from './pages/register/register/register.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions/terms-and-conditions.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home/admin-home.component';
import { PublicationHomeComponent } from './pages/publication-home/publication-home/publication-home.component';
import { ActivePublicationComponent } from './pages/active-publication/active-publication/active-publication.component';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile/admin-profile.component';
import { AdminVouchersComponent } from './pages/admin-vouchers/admin-vouchers/admin-vouchers.component';
import { SetDiscountComponent } from './pages/set-discount/set-discount/set-discount.component';

const routes: Routes = [
        { path: 'login',  component: LoginComponent, data:{ title:"login"}},
        { path: 'sign-up',  component: RegisterComponent, data:{ title:"register"}},
        { path: 'terminos-y-condiciones',  component: TermsAndConditionsComponent, data:{ title:"consent"}},
        
        { 
          path: 'mi-tienda', component: AdminHomeComponent,  data: { title: "admin-home" },
          children: [
              { path: 'mis-publicaciones',  component: PublicationHomeComponent, data:{ title:"publications"}},
              { path: 'publicaciones-activas',  component: ActivePublicationComponent, data:{ title:"active-publications"}},
              { path: 'mi-perfil',  component: AdminProfileComponent, data:{ title:"admin-profile"}},
              { path: 'vouchers',  component: AdminVouchersComponent, data:{ title:"admin-vouchers"}},
              { path: 'set-descuento',  component: SetDiscountComponent, data:{ title:"set-discount"}},
            
          ]
      },

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
