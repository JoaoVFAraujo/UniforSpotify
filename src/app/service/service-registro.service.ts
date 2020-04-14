import { Injectable } from '@angular/core';
import { Pessoa } from '../module/cadastro';

@Injectable({
  providedIn: 'root'
})
export class ServiceRegistroService {
  private listaCadastro: Array<Pessoa>=[];
  
  constructor() { }

  

  public setPessoa(nova:Pessoa){
      this.listaCadastro.push(nova)
  }

  public getPessoas(){
    console.log(this.listaCadastro);
  }
}
