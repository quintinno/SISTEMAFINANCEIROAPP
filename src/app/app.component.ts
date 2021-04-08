import { AutenticacaoService } from './service/autenticacao.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor( 
    private router: Router,
    private autenticacaoService: AutenticacaoService
  ) {
    if(this.autenticacaoService.isAutenticado) {
      this.router.navigate(["pessoa-monitoramento"]);
    } else {
      this.router.navigate(["login"]);
    }
  }


}
