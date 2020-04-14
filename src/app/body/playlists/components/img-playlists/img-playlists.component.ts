import { PlayListMock } from './../../../../playlist-mock/playlist-mock';
import { Component } from '@angular/core';

@Component({
  selector: 'app-img-playlists',
  templateUrl: './img-playlists.component.html',
  styleUrls: ['./img-playlists.component.css']
})
export class ImgPlaylistsComponent {

  playList: Array<any> = PlayListMock;

  constructor() { }

}
