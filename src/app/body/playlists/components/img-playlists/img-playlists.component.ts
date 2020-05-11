import { Component , OnInit} from '@angular/core';
import { PlaylistService } from '../../service/playlist.service';

@Component({
  selector: 'app-img-playlists',
  templateUrl: './img-playlists.component.html',
  styleUrls: ['./img-playlists.component.css']
})
export class ImgPlaylistsComponent implements OnInit {

  playList: Array<any> = [];

  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.onScroll();
   }

  onScroll(){
    this.getPlaylist();
  }

   getPlaylist() {
    // Aqui estou conversando com minha função de listar todos as playlist;
    this.playlistService.listAllPlaylist().subscribe(
      (succ) => {
         // Verificando se o status da comunicação é 200 OK;
        if (succ.status === 200) {
          // pegando o objeto da resposta e guardando no meu array;
          this.playList = succ.object;
          console.log("playlists")
          console.log(this.playList)
        } else {
          // Nunca vai da problema na comunição porque não tem backend de verdade kk;
          console.log("Probleman na comunicação");
        }
      }
    )
  }
}
