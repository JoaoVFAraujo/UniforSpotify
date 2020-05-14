import { Component, OnInit } from '@angular/core';
import { PlaylistModel } from 'src/app/model/playlist-model';
import { MyPlaylistService } from '../../service/my-playlist.service';

@Component({
  selector: 'app-my-image-playlist',
  templateUrl: './my-image-playlist.component.html',
  styleUrls: ['./my-image-playlist.component.css']
})
export class MyImagePlaylistComponent implements OnInit {

  playList: PlaylistModel[] = [];
  idUser: number = +sessionStorage.getItem('idUser');

  constructor(private myPlaylistService: MyPlaylistService) {

    this.myPlaylistService.getPlayListByIdUser(this.idUser).subscribe(
      (succ) => {
        // Verificando se o status da comunicação é 200 OK;
        if (succ.status === 200) {
          // pegando o objeto da resposta e guardando no meu array;
          this.playList = succ.object;
        } else {
          // Nunca vai da problema na comunição porque não tem backend de verdade kk;
          console.log("Probleman na comunicação");
        }
      }
    );

  }

  ngOnInit(): void { }

}
