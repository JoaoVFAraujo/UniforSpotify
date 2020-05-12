import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PessoaModel } from 'src/app/model/pessoa-model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  
  constructor(public httpClient: HttpClient) { }

  createUser(user: PessoaModel): Observable<any> {
    const body = JSON.stringify(user);

    return this.httpClient.post("http://localhost:4200/user", body);
  }
}
