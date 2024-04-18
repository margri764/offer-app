import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search/search.component';
import { SponsorHomeComponent } from './pages/sponsor-home/sponsor-home/sponsor-home.component';
import { CategoryHomeComponent } from './pages/category-home/category-home/category-home.component';
import { DayOfferHomeComponent } from './pages/day-offer-home/day-offer-home/day-offer-home.component';
import { HomeComponent } from './pages/home/home/home.component';
import { VouchersComponent } from './pages/vouchers/vouchers/vouchers.component';
import { NotificationComponent } from './pages/notification/notification/notification.component';
import { ViewSponsorComponent } from './pages/view-sponsor/view-sponsor/view-sponsor.component';


export const routes: Routes = [

  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

  { path: 'search',  component: SearchComponent, data:{ title:"search"}},
  { path: 'anunciantes',  component: SponsorHomeComponent, data:{ title:"sponsor"}},
  { path: 'anunciantes/:id',  component: ViewSponsorComponent, data:{ title:"sponsor"}},
  { path: 'categorias',  component: CategoryHomeComponent, data:{ title:"category"}},
  { path: 'ofertas-diarias',  component: DayOfferHomeComponent, data:{ title:"offers"}},
  { path: 'vouchers',  component: VouchersComponent, data:{ title:"vouchers"}},
  { path: 'notificaciones',  component: NotificationComponent, data:{ title:"notifications"}},
  { path: '',  component: HomeComponent, data:{ title:"home"}},
  { path: "", redirectTo: "", pathMatch: 'full' },
  { path: '**',    redirectTo: ''},
  
];
  

@NgModule({
    imports: [ 
              RouterModule.forRoot(routes),
            ],
    exports: [ RouterModule ],
 })
 
 export class AppRoutingModule { }
 