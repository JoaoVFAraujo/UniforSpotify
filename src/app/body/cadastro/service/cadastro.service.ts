import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from 'src/app/module/cadastro';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private listaCadastro: Pessoa[] = [];
  
  constructor(public httpClient: HttpClient) { }

  public setPessoa(novaPessoa: Pessoa){
    this.listaCadastro.push(novaPessoa);
  }

  public getPessoas(): Pessoa[] {
    return this.listaCadastro;
  }
}
