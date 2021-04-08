import { PessoaService } from './../../service/pessoa.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-editar',
  templateUrl: './pessoa-editar.page.html',
  styleUrls: ['./pessoa-editar.page.scss'],
})
export class PessoaEditarPage implements OnInit {

  pessoa: FormGroup;
  codigo: any;

  constructor(
    private pessoaService: PessoaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.codigo = this.activatedRoute.snapshot.paramMap.get("codigo");
    this.pessoaService.recuperarPessoa(this.codigo).valueChanges().subscribe( response => {
      this.pessoa.setValue(response);
    });
  }

  ngOnInit() {
    this.pessoa = this.formBuilder.group({
      nome: [""],
      email: [""],
      telefone: [""],
      // isInstituicaoFinanceira: [""],
      // isAtivo: [""],
      observacao: [""],
    });
    console.log(this.pessoa.value);
  }

  editarPessoa() {
    if(!this.pessoa.valid) {
      return false;
    } else {
      this.pessoaService.editarPessoa(this.codigo, this.pessoa.value).then( response => {
        console.log(response);
        this.router.navigate(["/pessoa-monitoramento"]);
      }).catch( responseError => {
        console.error(responseError);
      });
    }
  }

}
