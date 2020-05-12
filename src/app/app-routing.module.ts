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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'duvidas', component: DuvidasComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'playlists', component: PlaylistsComponent },
  { path: 'musicas/:musicId', component: MusicasComponent },
  { path: 'registerUser/:userId', component: FormUserComponent },
  { path: 'listUser', component: ListUserComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
