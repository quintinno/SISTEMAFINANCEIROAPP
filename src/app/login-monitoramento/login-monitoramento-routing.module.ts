import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginMonitoramentoPage } from './login-monitoramento.page';

const routes: Routes = [
  {
    path: '',
    component: LoginMonitoramentoPage
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginMonitoramentoPageRoutingModule {}
