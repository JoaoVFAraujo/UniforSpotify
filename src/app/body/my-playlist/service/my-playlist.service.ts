import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyPlaylistService {

  constructor(private httpClient: HttpClient) { }

  getPlayListByIdUser(idUser: number): Observable<any> {
    return this.httpClient.get('http://localhost:4200/getPlayListByIdUser/'+idUser);
  }
}
