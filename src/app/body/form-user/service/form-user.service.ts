import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormUserService {

  constructor(private httpclient: HttpClient) { }

  getUserById(userId): Observable<any> {
    return this.httpclient.get('http://localhost:4200/getUser/' + userId);
  }
}
