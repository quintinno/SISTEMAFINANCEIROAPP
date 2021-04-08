import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginMonitoramentoPageRoutingModule } from './login-monitoramento-routing.module';

import { LoginMonitoramentoPage } from './login-monitoramento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginMonitoramentoPageRoutingModule
  ],
  declarations: [LoginMonitoramentoPage]
})
export class LoginMonitoramentoPageModule {}
