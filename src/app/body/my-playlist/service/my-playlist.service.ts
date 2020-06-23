import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyPlaylistService {

  constructor(private httpClient: HttpClient) { }

  getPlayListByuserId(userId: number): Observable<any> {
    return this.httpClient.get('http://localhost:8080/playlist/userId/'+userId, this.fullJson());
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
