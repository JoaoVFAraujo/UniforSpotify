import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PessoaModel } from 'src/app/model/pessoa-model';

@Injectable({
  providedIn: 'root'
})
export class FormUserService {

  constructor(private httpclient: HttpClient) { }

  getUserById(userId): Observable<any> {
    return this.httpclient.get('http://localhost:4200/getUser/' + userId);
  }

  editUser(user: PessoaModel): Observable<any> {
    const body = JSON.stringify(user);

    return this.httpclient.post('http://localhost:4200/user', body);
  }
}
