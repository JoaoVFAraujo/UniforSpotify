import { PlayListMock } from './../../playlist-mock/playlist-mock';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.component.html',
  styleUrls: ['./musicas.component.css']
})
export class MusicasComponent {

  msaapPageSizeOptions = [3];

  musicId = '';
  playlistSelect;
  musics;

  constructor(private activatedRoute: ActivatedRoute) {

    this.musicId = this.activatedRoute.snapshot.params.musicId;

    this.playlistSelect = PlayListMock.filter(element => element.id == this.musicId)[0];

    this.musics = this.playlistSelect.musicas;
    
  }

}
