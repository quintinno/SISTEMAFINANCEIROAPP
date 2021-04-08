import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioCadastrarPageRoutingModule } from './usuario-cadastrar-routing.module';

import { UsuarioCadastrarPage } from './usuario-cadastrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioCadastrarPageRoutingModule
  ],
  declarations: [UsuarioCadastrarPage]
})
export class UsuarioCadastrarPageModule {}
