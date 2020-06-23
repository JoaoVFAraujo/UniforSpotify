import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlaylistModel } from 'src/app/model/playlist-model';

@Injectable({
  providedIn: 'root'
})
export class EditPlayListService {

  constructor(private httpClient: HttpClient) { }

  //pegar todas as musicas
  listAllMusic(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/music', this.fullJson());
  }

  getPlaylistById(id: number) : Observable<any>{
    return this.httpClient.get('http://localhost:8080/playlist/'+id, this.fullJson());
  }

  //para adicionar as playlists
  editPlaylist(playlist: PlaylistModel): Observable<any> {
    const body = JSON.stringify(playlist);

    return this.httpClient.put('http://localhost:8080/playlist', body, this.fullJson());
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
