import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children:[
      {
        path: 'hogar',
        loadChildren: () => import('./../../page/hogar/hogar.module').then( m => m.HogarPageModule)
      },
      {
        path: 'busqueda',
        loadChildren: () => import('./../../page/busqueda/busqueda.module').then( m => m.BusquedaPageModule)
      },
      {
        path: 'reel',
        loadChildren: () => import('./../../page/reel/reel.module').then( m => m.ReelPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./../../page/perfil/perfil.module').then( m => m.PerfilPageModule)
      }
    ]

  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
