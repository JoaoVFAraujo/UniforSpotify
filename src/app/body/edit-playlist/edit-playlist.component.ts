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
  selection = [];
  length: number;

  constructor(
    private fb: FormBuilder,
    private service: EditPlayListService,
    private activatedRoute :ActivatedRoute,
    private router: Router) {

      this.idPlaylist = +this.activatedRoute.snapshot.params.playlistId;
  }

  ngOnInit(): void {
    this.getMusic();

    this.formEditPlaylist.valueChanges.subscribe(v => {
      console.log(this.formEditPlaylist);
      console.log(v);
    })
  }

  // isAllSelected() {
  //   const numSelected = this.selection.length;
  //   const numRows = this.length;
  //   console.log(this.selection.length, this.length)
  //   return numSelected === numRows;
  // }

  // masterToggle() {
  //   if (this.isAllSelected()) {
  //     this.selection = [];
  //   } else {
  //     this.playList.musicas.forEach(musica => {
  //       this.selectedRow(musica);
  //     });
  //   }
  // }

  selectedRow(row) {
    const indexRow = this.selection.findIndex(v => v.title === row.title);

    if (indexRow > -1) {
      this.selection.splice(indexRow, 1);
    } else {
      this.selection.push(row);
    }

    this.formEditPlaylist.get('musicas').setValue(this.selection);
  }

  selectedAll(row) {
    const indexRow = this.selection.findIndex(v => v.title === row.title);

    if (indexRow === -1) {
      this.selection.push(row);
    }
  }

  verifyChecked(row) {
    if (this.selection.findIndex(v => v.title === row.title) > -1) {
      return true;
    }
  }

  getMusic(){
    this.service.listAllMusic().subscribe(
      (succ) => {
        this.dataSource = new MatTableDataSource<any>(succ.body);
        this.getPlaylistById();
        this.length = succ.body.length;
      }
    );
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
          // pegando o objeto da resposta e guardando no meu array;
          this.playList = succ.body;

          this.formEditPlaylist = this.fb.group({
            id      : [ this.playList.id ],
            nome    : [ this.playList.nome, [Validators.required, Validators.minLength(4)] ],
            image   : [ 'assets/imgs/playlist/brasil360.jpg' ],
            userId  : [ this.playList.userId ],
            musicas : [ this.selection ],
          });

          succ.body.musicas.forEach(musica => {
            this.selectedRow(musica);
          });
      }
    );
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}
