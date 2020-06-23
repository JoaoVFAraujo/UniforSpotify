import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpCLient: HttpClient) { }

  login(formValue): Observable<any> {
    const body = JSON.stringify(formValue);

    return this.httpCLient.post("http://localhost:8080/login", body, this.fullJson());
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
