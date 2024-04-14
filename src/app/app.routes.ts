import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
    // Otras rutas de la aplicación principal
  ];
  


@NgModule({
    imports: [ 
                RouterModule.forRoot(routes),
                PagesRoutingModule    
            ],
    exports: [ RouterModule ],
 })
 
 export class AppRoutingModule { }
 