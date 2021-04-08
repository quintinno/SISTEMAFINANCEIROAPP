import { AutenticacaoService } from './../service/autenticacao.service';
import { PessoaModel } from './../model/pessoa-model';
import { PessoaService } from './../service/pessoa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-monitoramento',
  templateUrl: './pessoa-monitoramento.page.html',
  styleUrls: ['./pessoa-monitoramento.page.scss'],
})
export class PessoaMonitoramentoPage implements OnInit {

  pessoaList = [];

  constructor( private pessoaService: PessoaService, public autenticacaoService: AutenticacaoService ) { }

  ngOnInit() {
    let pessoalListResultado = this.pessoaService.recuperarPessoaList();
    pessoalListResultado.snapshotChanges().subscribe( response => {
      this.pessoaList = [];
      response.forEach( pessoaResultado => {
        let pessoaJSON = pessoaResultado.payload.toJSON();
        pessoaJSON["$key"] = pessoaResultado.key;
        this.pessoaList.push(pessoaJSON as PessoaModel);
      })
    });
  }

  recuperarPessoaList() {
    this.pessoaService.recuperarPessoaList().valueChanges().subscribe( response => {
      console.log(response);
    });
  }

  removerPessoa( codigo ) {
    console.log(codigo);
    if(window.confirm("Deseja realmente remover esse Registro ?")) {
      this.pessoaService.removerPessoa(codigo);
    }
  }

}
