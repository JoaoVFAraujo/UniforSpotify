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

    this.selection.changed.subscribe(
      (element) => {
        this.formEditPlaylist.get('musicas').setValue(this.selection.selected);
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
        // pegando o objeto da resposta e guardando no meu array;
        this.dataSource = new MatTableDataSource<any>(succ.body);
        this.getPlaylistById();

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
            musicas : [ this.playList.musicas, Validators.required],
          });

          succ.body.musicas.forEach(musica => {
            this.selection.toggle(musica);
          });
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
