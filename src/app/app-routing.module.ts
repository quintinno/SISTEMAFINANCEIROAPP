import { UsuarioModel } from './model/usuario-model';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'pessoa-monitoramento', loadChildren: () => import('./pessoa-monitoramento/pessoa-monitoramento.module').then( m => m.PessoaMonitoramentoPageModule) },
  { path: 'pessoa-cadastrar', loadChildren: () => import('./pessoa-monitoramento/pessoa-cadastrar/pessoa-cadastrar.module').then( m => m.PessoaCadastrarPageModule) },
  { path: 'pessoa-editar/:codigo', loadChildren: () => import('./pessoa-monitoramento/pessoa-editar/pessoa-editar.module').then( m => m.PessoaEditarPageModule) },
  { path: 'usuario-monitoramento', loadChildren: () => import('./usuario-monitoramento/usuario-monitoramento.module').then( m => m.UsuarioMonitoramentoPageModule) },
  { path: 'usuario-cadastrar', loadChildren: () => import('./usuario-monitoramento/usuario-cadastrar/usuario-cadastrar.module').then( m => m.UsuarioCadastrarPageModule) },
  { path: '', redirectTo: 'pessoa-monitoramento', pathMatch: 'full' },
  { path: 'login-monitoramento', loadChildren: () => import('./login-monitoramento/login-monitoramento.module').then( m => m.LoginMonitoramentoPageModule) },
  { path: 'login', loadChildren: () => import('./login-monitoramento/login/login.module').then( m => m.LoginPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
