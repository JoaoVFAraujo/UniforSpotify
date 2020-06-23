import { Component } from '@angular/core';
import { PlaylistService } from '../../service/playlist.service';

@Component({
  selector: 'app-img-playlists',
  templateUrl: './img-playlists.component.html',
  styleUrls: ['./img-playlists.component.css']
})
export class ImgPlaylistsComponent {

  playList: Array<any> = [];

  constructor(private playlistService: PlaylistService) {

    // Aqui estou conversando com minha função de listar todos as playlist;
    this.playlistService.listAllPlaylist().subscribe(
      (succ) => {
          // pegando o objeto da resposta e guardando no meu array;
          this.playList = succ.body;
      }
    );

  }

}
