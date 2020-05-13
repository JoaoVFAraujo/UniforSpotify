import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PlaylistModel } from 'src/app/model/playlist-model';

@Injectable({
  providedIn: 'root'
})
export class AddPlaylistService {

  constructor(private httpClient: HttpClient) { }

  //pegar todas as musicas
  listAllMusic(): Observable<any> {
    return this.httpClient.get('http://localhost:4200/musics');
  }

  listAllPlaylist(): Observable<any> {
    return this.httpClient.get('http://localhost:4200/playList');
  }

  //para adicionar as playlists
  addPlaylist(playlist: PlaylistModel): Observable<any> {
    const body = JSON.stringify(playlist);

    return this.httpClient.post('http://localhost:4200/playList', body);
  }

}
