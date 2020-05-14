import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PlaylistModel } from 'src/app/model/playlist-model';

@Injectable({
  providedIn: 'root'
})
export class EditPlayListService {

  constructor(private httpClient: HttpClient) { }

  //pegar todas as musicas
  listAllMusic(): Observable<any> {
    return this.httpClient.get('http://localhost:4200/musics');
  }

  getPlaylistById(id: number) : Observable<any>{
    return this.httpClient.get('http://localhost:4200/getPlayList/'+id);
  }

  //para adicionar as playlists
  editPlaylist(playlist: PlaylistModel): Observable<any> {
    const body = JSON.stringify(playlist);

    return this.httpClient.post('http://localhost:4200/playList', body);
  }
}
