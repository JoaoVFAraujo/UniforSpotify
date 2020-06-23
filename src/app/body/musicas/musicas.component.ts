import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayListMock } from 'src/app/mock/playlist-mock/playlist-mock';
import { MusicasService } from './service/musicas.service';

@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.component.html',
  styleUrls: ['./musicas.component.css']
})
export class MusicasComponent {

  msaapPageSizeOptions = [3];

  playlistId: number;
  playlistSelect;
  musics;
  userId;

  constructor(
    private activatedRoute: ActivatedRoute,
    private musicasService: MusicasService) {

    this.playlistId = +this.activatedRoute.snapshot.params.musicId;

    this.musicasService.getPlaylistById(this.playlistId).subscribe(
      (succ) => {
        this.playlistSelect = succ.body;
        this.musics = succ.body.musicas;
      }
    )

    this.userId = sessionStorage.getItem('userId');
    
  }

}
