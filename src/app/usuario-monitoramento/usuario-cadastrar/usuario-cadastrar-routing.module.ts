import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioCadastrarPage } from './usuario-cadastrar.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioCadastrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioCadastrarPageRoutingModule {}
