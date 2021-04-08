import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PessoaMonitoramentoPageRoutingModule } from './pessoa-monitoramento-routing.module';
import { PessoaMonitoramentoPage } from './pessoa-monitoramento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PessoaMonitoramentoPageRoutingModule
  ],
  declarations: [PessoaMonitoramentoPage]
})
export class PessoaMonitoramentoPageModule {}
