import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioMonitoramentoPage } from './usuario-monitoramento.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioMonitoramentoPage
  },
  {
    path: 'usuario-cadastrar',
    loadChildren: () => import('./usuario-cadastrar/usuario-cadastrar.module').then( m => m.UsuarioCadastrarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioMonitoramentoPageRoutingModule {}
