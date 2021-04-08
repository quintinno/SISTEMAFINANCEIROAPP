import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoaMonitoramentoPage } from './pessoa-monitoramento.page';

const routes: Routes = [
  {
    path: '',
    component: PessoaMonitoramentoPage
  },
  {
    path: 'pessoa-cadastrar',
    loadChildren: () => import('./pessoa-cadastrar/pessoa-cadastrar.module').then( m => m.PessoaCadastrarPageModule)
  },
  {
    path: 'pessoa-editar',
    loadChildren: () => import('./pessoa-editar/pessoa-editar.module').then( m => m.PessoaEditarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoaMonitoramentoPageRoutingModule {}
