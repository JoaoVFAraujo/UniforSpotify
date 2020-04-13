import { MusicasComponent } from './body/musicas/musicas.component';
import { PlaylistsComponent } from './body/playlists/playlists.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import {DuvidasComponent} from 'src/app/body/duvidas/duvidas.component';

const routes: Routes = [
  
  { path: 'home', component: HomeComponent },  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'duvidas', component: DuvidasComponent },  
  { path: 'playlists', component: PlaylistsComponent },
  { path: 'musicas/:musicId', component: MusicasComponent }, 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
