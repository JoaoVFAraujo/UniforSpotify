import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayListMock } from 'src/app/mock/playlist-mock/playlist-mock';

@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.component.html',
  styleUrls: ['./musicas.component.css']
})
export class MusicasComponent {

  msaapPageSizeOptions = [3];

  musicId: number;
  playlistSelect;
  musics;
  idUser;

  constructor(private activatedRoute: ActivatedRoute) {

    this.musicId = +this.activatedRoute.snapshot.params.musicId;

    this.playlistSelect = PlayListMock.filter(element => element.id == this.musicId)[0];

    this.idUser = sessionStorage.getItem('idUser');

    this.musics = this.playlistSelect.musicas;
    
  }

}
