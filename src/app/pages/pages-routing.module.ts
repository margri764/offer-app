import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { SearchComponent } from './search/search/search.component';
import { SponsorHomeComponent } from './sponsor-home/sponsor-home/sponsor-home.component';
import { CategoryHomeComponent } from './category-home/category-home/category-home.component';


const routes: Routes = [

  { path: 'search',  component: SearchComponent, data:{ title:"search"}},
  { path: 'anunciantes',  component: SponsorHomeComponent, data:{ title:"sponsor"}},
  { path: 'categorias',  component: CategoryHomeComponent, data:{ title:"category"}},
  { path: '',  component: HomeComponent, data:{ title:"home"}},

  {
    path: "", redirectTo: "", pathMatch: 'full'
  },
  {
    path: '**',    redirectTo: ''
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

export class PagesRoutingModule { }
