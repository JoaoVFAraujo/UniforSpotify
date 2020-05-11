import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent} from './body/home/home.component';
import { NavHeaderComponent} from './nav-header/nav-header.component';
import { FooterComponent } from './footer/footer.component';
import { DuvidasComponent} from './body/duvidas/duvidas.component';
import { PainelExpansivoComponent } from './body/duvidas/components/painel-expansivo/painel-expansivo.component';
import { CommunityComponent } from './body/duvidas/components/community/community.component';
import { PlaylistsComponent } from './body/playlists/playlists.component';
import { MusicasComponent } from './body/musicas/musicas.component';
import { ImgPlaylistsComponent } from './body/playlists/components/img-playlists/img-playlists.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { CadastroComponent } from './body/cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpIntercptorProviders } from './core/interceptor';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { StoreModule } from '@ngrx/store';
import { AddPlaylistComponent } from './body/playlists/components/add-playlist/add-playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavHeaderComponent,
    FooterComponent,
    DuvidasComponent,
    CadastroComponent,
    PainelExpansivoComponent,
    CommunityComponent,
    PlaylistsComponent,
    MusicasComponent,
    ImgPlaylistsComponent,
    AddPlaylistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxAudioPlayerModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    InfiniteScrollModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [
    HttpIntercptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
