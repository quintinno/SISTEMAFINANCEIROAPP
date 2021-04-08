import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioMonitoramentoPageRoutingModule } from './usuario-monitoramento-routing.module';

import { UsuarioMonitoramentoPage } from './usuario-monitoramento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioMonitoramentoPageRoutingModule
  ],
  declarations: [UsuarioMonitoramentoPage]
})
export class UsuarioMonitoramentoPageModule {}
