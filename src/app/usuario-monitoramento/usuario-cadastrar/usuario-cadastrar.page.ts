import { Router } from '@angular/router';
import { AutenticacaoService } from './../../service/autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-cadastrar',
  templateUrl: './usuario-cadastrar.page.html',
  styleUrls: ['./usuario-cadastrar.page.scss'],
})
export class UsuarioCadastrarPage implements OnInit {

  constructor( 
    public autenticacaoService: AutenticacaoService,
    public router: Router,
    ) {
  }

  ngOnInit() { }

  cadastrarUsuario( usuario, senha ) {
    this.autenticacaoService.registrarUsuario(usuario.value, senha.value).then( respose => {
      localStorage.setItem("codigo", respose.user.uid);
      this.router.navigate(["/pessoa-monitoramento"]);
    }).catch( response => {
      window.alert(response.message);
    });
  }

}
