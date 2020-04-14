import { Injectable } from '@angular/core';
import { Pessoa } from '../module/cadastro';

@Injectable({
  providedIn: 'root'
})
export class ServiceRegistroService {
  private listaCadastro: Pessoa[] = [];
  
  constructor() { }

  public setPessoa(novaPessoa: Pessoa){
    this.listaCadastro.push(novaPessoa);
  }

  public getPessoas(): Pessoa[] {
    return this.listaCadastro;
  }
}
