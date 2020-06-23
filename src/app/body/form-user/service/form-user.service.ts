import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PessoaModel } from 'src/app/model/pessoa-model';

@Injectable({
  providedIn: 'root'
})
export class FormUserService {

  constructor(private httpclient: HttpClient) { }

  getUserById(userId): Observable<any> {
    return this.httpclient.get('http://localhost:8080/user/' + userId, this.fullJson());
  }

  editUser(user: PessoaModel): Observable<any> {
    const body = JSON.stringify(user);

    return this.httpclient.put('http://localhost:8080/user', body, this.fullJson());
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
