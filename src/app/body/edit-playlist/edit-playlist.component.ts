import { Component, OnInit } from '@angular/core';
import { MusicaModel } from 'src/app/model/musica-model';
import { PlaylistModel } from 'src/app/model/playlist-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Router, ActivatedRoute } from '@angular/router';
import { EditPlayListService } from './service/edit-play-list.service';

@Component({
  selector: 'app-edit-playlist',
  templateUrl: './edit-playlist.component.html',
  styleUrls: ['./edit-playlist.component.css']
})
export class EditPlaylistComponent implements OnInit {

  listPlay: PlaylistModel[];
  formEditPlaylist: FormGroup;

  idPlaylist: number;
  playList: PlaylistModel;

  displayedColumns: string[] = ['select', 'title', 'album'];
  dataSource = new MatTableDataSource<MusicaModel>();
  selection = new SelectionModel<MusicaModel>(true, []);

  constructor(
    private fb: FormBuilder,
    private service: EditPlayListService,
    private activatedRoute :ActivatedRoute,
    private router: Router) {

      this.idPlaylist = +this.activatedRoute.snapshot.params.playlistId;
  }

  ngOnInit(): void {
    this.getMusic();
    this.getPlaylistById();
    this.creatForm();

    this.selection.changed.subscribe(
      () => {
        this.formEditPlaylist.get('musicas').setValue(this.selection.selected)
      }
    );
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear()
    } else {
      this.dataSource.data.forEach(row => this.selection.select(row));
    }
  }

  getMusic(){
    this.service.listAllMusic().subscribe(
      (succ) => {
         // Verificando se o status da comunicação é 200 OK;
        if (succ.status === 200) {
          // pegando o objeto da resposta e guardando no meu array;
          this.dataSource = new MatTableDataSource<any>(succ.object);
        } else {
          // Nunca vai da problema na comunição porque não tem backend de verdade kk;
          console.log("Probleman na comunicação");
        }
      }
    );
  } 

  creatForm() {
    this.formEditPlaylist = this.fb.group({
      id      : [ this.playList.id ],
      nome    : [ this.playList.nome, [Validators.required, Validators.minLength(4)] ],
      image   : [ 'assets/imgs/playlist/brasil360.jpg' ],
      idUser  : [ this.playList.idUser ],
      musicas : [ this.playList.musicas, Validators.required],
    });
  }

  onSubmit(valueForm: PlaylistModel) {
    this.service.editPlaylist(valueForm).subscribe(
      (succ) => {
        alert(succ.message);
        this.router.navigate(['playlists']);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getPlaylistById(){
    this.service.getPlaylistById(this.idPlaylist).subscribe(
      (succ) => {
         // Verificando se o status da comunicação é 200 OK;
        if (succ.status === 200) {
          // pegando o objeto da resposta e guardando no meu array;
          this.playList = succ.object;

          succ.object.musicas.forEach(musica => {
            this.selection.select(musica);
          });

        } else {
          // Nunca vai da problema na comunição porque não tem backend de verdade kk;
          console.log("Probleman na comunicação");
        }
      }
    );
  }

  isSelected(musica: MusicaModel) {
    if (this.selection.selected.findIndex(v => v.id === musica.id) > -1) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}
