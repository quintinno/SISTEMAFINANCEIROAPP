import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoaEditarPage } from './pessoa-editar.page';

const routes: Routes = [
  {
    path: '',
    component: PessoaEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoaEditarPageRoutingModule {}
