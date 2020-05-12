import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpCLient: HttpClient) { }

  login(formValue): Observable<any> {
    const body = JSON.stringify(formValue);

    return this.httpCLient.post("http://localhost:4200/login", body);
  }
}
