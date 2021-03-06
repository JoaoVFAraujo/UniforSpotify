import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PessoaModel } from 'src/app/model/pessoa-model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  
  constructor(public httpClient: HttpClient) { }

  createUser(user: PessoaModel): Observable<any> {
    const body = JSON.stringify(user);

    return this.httpClient.post("http://localhost:8080/user", body, this.fullJson());
  }

  fullJson(): any {
    return {
        headers: new HttpHeaders({
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8;application/json',
            'Content-Type': 'application/json'
        })
    };
  }
}
