import { PessoaService } from './../../service/pessoa.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-cadastrar',
  templateUrl: './pessoa-cadastrar.page.html',
  styleUrls: ['./pessoa-cadastrar.page.scss'],
})
export class PessoaCadastrarPage implements OnInit {

  pessoa: FormGroup;

  constructor( 
    private pessoaService: PessoaService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.pessoa = this.formBuilder.group({
      nome: [""],
      email: [""],
      telefone: [""],
      // isInstituicaoFinanceira: [""],
      // isAtivo: [""],
      observacao: [""],
    });
  }

  cadatrarPessoa() {
    if(!this.pessoa.valid) {
      return false;
    } else {
      this.pessoaService.cadastrarPessoa(this.pessoa.value).then( response => {
        console.log(response);
        this.pessoa.reset();
        this.router.navigate(["/pessoa-monitoramento"]);
      }).catch( responseError => {
        console.error(responseError);
      });
    }
  }

}
