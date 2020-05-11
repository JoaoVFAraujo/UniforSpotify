import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PessoaModel } from 'src/app/model/pessoa-model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private listaCadastro: PessoaModel[] = [];
  
  constructor(public httpClient: HttpClient) { }

  public setPessoa(novaPessoa: PessoaModel){
    this.listaCadastro.push(novaPessoa);
  }

  public getPessoas(): PessoaModel[] {
    return this.listaCadastro;
  }
}
