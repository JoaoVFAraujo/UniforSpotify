import { MusicasComponent } from './body/musicas/musicas.component';
import { PlaylistsComponent } from './body/playlists/playlists.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import {DuvidasComponent} from 'src/app/body/duvidas/duvidas.component';
import { CadastroComponent } from './body/cadastro/cadastro.component';
import { FormUserComponent } from './body/form-user/form-user.component';
import { ListUserComponent } from './body/list-user/list-user.component';
import { LoginComponent } from './body/login/login.component';
import { AuthGuard } from './core/auth.guard';
import { AddPlaylistComponent } from './body/PlaylistAdd/component/add-playlist/add-playlist.component';
import { EditPlaylistComponent } from './body/edit-playlist/edit-playlist.component';
import { MyPlaylistComponent } from './body/my-playlist/my-playlist.component';

const routes: Routes = [
  { 
    path: 'home',
    component: HomeComponent
  },
  {
    path: '', redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'duvidas',
    component: DuvidasComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'playlists',
    component: PlaylistsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'musicas/:musicId',
    component: MusicasComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'registerUser/:userId',
    component: FormUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'listUser',
    component: ListUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'addPlaylist',
    component: AddPlaylistComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'editPlaylist/:playlistId',
    component: EditPlaylistComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'myPlaylist',
    component: MyPlaylistComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
