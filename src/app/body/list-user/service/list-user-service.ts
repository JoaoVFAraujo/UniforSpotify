import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListUserService {

  constructor(public httpClient: HttpClient) { }

  listAllUsers(): Observable<any> {
    return this.httpClient.get('http://localhost:4200/users');
  }

}
