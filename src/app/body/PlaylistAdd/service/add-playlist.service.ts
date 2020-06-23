import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PlaylistModel } from 'src/app/model/playlist-model';

@Injectable({
  providedIn: 'root'
})
export class AddPlaylistService {

  constructor(private httpClient: HttpClient) { }

  //pegar todas as musicas
  listAllMusic(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/music', this.fullJson());
  }

  listAllPlaylist(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/playlist', this.fullJson());
  }

  //para adicionar as playlists
  addPlaylist(playlist: PlaylistModel): Observable<any> {
    const body = JSON.stringify(playlist);

    return this.httpClient.post('http://localhost:8080/playlist', body, this.fullJson());
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
