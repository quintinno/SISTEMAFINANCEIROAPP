import { Router } from '@angular/router';
import { AutenticacaoService } from './../../service/autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public autenticacaoService: AutenticacaoService,
    public router: Router,
  ) { }

  ngOnInit() { }

  realizarLogin( usuario, senha ) {
    this.autenticacaoService.realizarAutenticacao(usuario.value, senha.value).then( respose => {
      localStorage.setItem("codigo", respose.user.uid);
      this.router.navigate(["/pessoa-monitoramento"]);
    }).catch( response => {
      window.alert(response.message);
    });
  }

  redirecionarTelaRegistrarUsuario() {
    this.router.navigate(["/usuario-cadastrar"]);
  }

}
