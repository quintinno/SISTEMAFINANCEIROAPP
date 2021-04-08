import { UsuarioModel } from './../model/usuario-model';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  autorizacao: any;

  constructor(
    public angularFirestore: AngularFirestore,
    public router: Router,
    public angularFireAuth: AngularFireAuth
  ) {
    this.angularFireAuth.authState.subscribe( response => {
      if(response) {
        this.autorizacao = response;
        localStorage.setItem("autorizacao", JSON.stringify(this.autorizacao));
        JSON.parse(localStorage.getItem("autorizacao"));
      } else {
        localStorage.setItem("autorizacao", null);
        JSON.parse(localStorage.getItem("autorizacao"));
      }
    });
  }

  realizarAutenticacao( usuario: string, senha: string ) {
    return this.angularFireAuth.signInWithEmailAndPassword(usuario, senha);
  }

  registrarUsuario( usuario: string, senha: string ) {
    return this.angularFireAuth.createUserWithEmailAndPassword(usuario, senha);
  }

  get isAutenticado() : boolean {
    const usuario = JSON.parse(localStorage.getItem("autorizacao"));
    return (usuario !== null) ? true : false;
  }

  cadastrarUsuario( usuario: any ) {
    const usuarioReferencia: AngularFirestoreDocument<any> = this.angularFirestore.doc(`usuario/${usuario.codigo}`);
    const usuarioRetorno: UsuarioModel = {
      codigo: usuario.codigo,
      email: usuario.email,
      nome: usuario.nome,
      apelido: usuario.apelido,
      fotoURL: usuario.fotoURL,
    }
    return usuarioReferencia.set(usuarioRetorno, {
      merge: true
    })
  }

  sairAplicacao() {
    return this.angularFireAuth.signOut().then( ()=> {
      localStorage.removeItem("usuario");
      localStorage.removeItem("codigo");
      this.router.navigate(["login"]);
    });
  }

}
