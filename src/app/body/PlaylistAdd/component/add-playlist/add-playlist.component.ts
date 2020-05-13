import { Component, OnInit } from '@angular/core';
import { MusicaModel } from 'src/app/model/musica-model';
import { PlaylistModel } from 'src/app/model/playlist-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddPlaylistService } from '../../service/add-playlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-playlist',
  templateUrl: './add-playlist.component.html',
  styleUrls: ['./add-playlist.component.css']
})
export class AddPlaylistComponent implements OnInit {

  listMusics: MusicaModel[];
  listPlay : PlaylistModel[];
  formAddPlaylist: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: AddPlaylistService,
    private router: Router) { }

  ngOnInit(): void {
    this.getMusic();
    this.creatForm();
  }

  getMusic(){
    this.service.listAllMusic().subscribe(
      (succ) => {
         // Verificando se o status da comunicação é 200 OK;
        if (succ.status === 200) {
          // pegando o objeto da resposta e guardando no meu array;
          this.listMusics = succ.object;
        } else {
          // Nunca vai da problema na comunição porque não tem backend de verdade kk;
          console.log("Probleman na comunicação");
        }
      }
    )
  } 

  creatForm(){
    this.formAddPlaylist = this.fb.group({
      id      : [ null ],
      nome    : [ null, [Validators.required, Validators.minLength(4)] ],
      image   : [ 'assets/imgs/playlist/brasil360.jpg' ],
      idUser  : [ sessionStorage.getItem('idUser') ],
      musicas : [ null, Validators.required],
    });
  }

  onSubmit(valueForm: PlaylistModel) {
      
    this.service.addPlaylist(valueForm).subscribe(
      (succ) => {
        alert(succ.message);
        this.router.navigate(['playlists']);
      }
    )
  }

  getPlaylist(){
    this.service.listAllPlaylist().subscribe(
      (succ) => {
         // Verificando se o status da comunicação é 200 OK;
        if (succ.status === 200) {
          // pegando o objeto da resposta e guardando no meu array;
          this.listPlay = succ.object; 
        } else {
          // Nunca vai da problema na comunição porque não tem backend de verdade kk;
          console.log("Probleman na comunicação");
        }
      }
    )
  }


}
