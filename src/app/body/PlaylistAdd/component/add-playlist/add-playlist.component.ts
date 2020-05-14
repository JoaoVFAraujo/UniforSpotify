import { Component, OnInit } from '@angular/core';
import { MusicaModel } from 'src/app/model/musica-model';
import { PlaylistModel } from 'src/app/model/playlist-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddPlaylistService } from '../../service/add-playlist.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-add-playlist',
  templateUrl: './add-playlist.component.html',
  styleUrls: ['./add-playlist.component.css']
})
export class AddPlaylistComponent implements OnInit {

  listPlay : PlaylistModel[];
  formAddPlaylist: FormGroup;

  displayedColumns: string[] = ['select', 'title', 'album'];
  dataSource = new MatTableDataSource<MusicaModel>();
  selection = new SelectionModel<MusicaModel>(true, []);

  constructor(
    private fb: FormBuilder,
    private service: AddPlaylistService,
    private router: Router) { }

  ngOnInit(): void {
    this.getMusic();
    this.creatForm();

    this.selection.changed.subscribe(
      () => {
        this.formAddPlaylist.get('musicas').setValue(this.selection.selected)
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
    );

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
    );
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}
