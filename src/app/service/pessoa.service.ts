import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "@angular/fire/database";
import { PessoaModel } from './../model/pessoa-model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoaList: AngularFireList<any>;
  pessoa: AngularFireObject<any>;

  constructor( private angularFireDatabase: AngularFireDatabase ) { 
    this.pessoaList = angularFireDatabase.list("/pessoa");
  }
  
  cadastrarPessoa( pessoa: PessoaModel ) {
    return this.pessoaList.push({
      nome: pessoa.nome,
      email: pessoa.email,
      telefone: pessoa.telefone,
      // isInstituicaoFinanceira: pessoa.isInstituicaoFinanceira,
      // isAtivo: pessoa.isAtivo,
      observacao: pessoa.observacao,
    });
  }

  recuperarPessoaList() {
    return this.pessoaList = this.angularFireDatabase.list("/pessoa");
  }

  recuperarPessoa( codigo: string ) {
    return this.pessoa = this.angularFireDatabase.object("/pessoa/" + codigo);
  }

  editarPessoa( codigo: string, pessoa: PessoaModel ) {
    return this.pessoa.update({
      nome: pessoa.nome,
      email: pessoa.email,
      telefone: pessoa.telefone,
      // isInstituicaoFinanceira: pessoa.isInstituicaoFinanceira,
      // isAtivo: pessoa.isAtivo,
      observacao: pessoa.observacao,
    });
  }

  removerPessoa( codigo: string ) {
    this.pessoa = this.angularFireDatabase.object("/pessoa/" + codigo);
    this.pessoa.remove();
  }

}
