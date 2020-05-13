import { listUsersMock } from './../mock/user-mock/user-mock';
import { PlayListMock } from './../mock/playlist-mock/playlist-mock';

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { PlaylistModel } from '../model/playlist-model';
import { PessoaModel } from '../model/pessoa-model';
import { MusicaModel } from '../model/musica-model';

@Injectable()
export class InterceptorService implements HttpInterceptor {

    playList: PlaylistModel[] = PlayListMock;
    listUsers: PessoaModel[] = listUsersMock;

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (request.method === "GET" && request.url === "http://localhost:4200/users") {
            return of(new HttpResponse({ body: {status: 200, message: 'Listagem de todos usuários', object: this.listUsers} }));

        } else if (request.method === "POST" && request.url === "http://localhost:4200/user") {
            const user = JSON.parse(request.body);
            const indexUser = this.listUsers.findIndex(u => u.id === user.id);

            if (!user.id) {
                user.id = this.listUsers.length + 1;
                this.listUsers.push(user);

                return of(new HttpResponse({ body: {status: 200, message: 'Usuário cadastrado com sucesso', object: this.listUsers} }));
            } else {
                this.listUsers[indexUser] = user;

                return of(new HttpResponse({ body: {status: 200, message: 'Usuário editado com sucesso', object: this.listUsers[indexUser]} }));
            }

        } else if (request.method === "GET" && request.url.indexOf('getUser') > -1) {
            const idUser = JSON.parse(request.url.replace("http://localhost:4200/getUser/", ""));
            const indexUser = this.listUsers.findIndex(u => u.id === idUser);

            return of(new HttpResponse({ body: {status: 200, message: 'Usuário encontrado com sucesso', object: this.listUsers[indexUser]} }));
            
        } else if (request.method === "POST" && request.url === "http://localhost:4200/login") {
            const user = JSON.parse(request.body);
            const indexUser = this.listUsers.findIndex(u => u.email === user.email && u.senha === user.senha);

            if (indexUser > -1) {
                let token = '';
                for (var i = 80; i > 0; --i) token += (Math.floor(Math.random()*256)).toString(16);
                
                return of(new HttpResponse({ body: {status: 200, message: 'Logado com sucesso', object: { token: token, idUser: this.listUsers[indexUser].id }} }));
            } else {
                return of(new HttpResponse({ body: {status: 404, message: 'Usuário não encontrado'} }));
            }

        } else if (request.method === "GET" && request.url === "http://localhost:4200/playList") {
            return of(new HttpResponse({ body: {status: 200, message: 'Listagem de todas playlist', object: this.playList} }));

        } else if (request.method === "POST" && request.url === "http://localhost:4200/playList") {
            const playlist = JSON.parse(request.body);
            const indexPlaylist = this.playList.findIndex(u => u.id === playlist.id);

            if (!playlist.id) {
                playlist.id = this.playList.length + 1;
                this.playList.push(playlist);

                return of(new HttpResponse({ body: {status: 200, message: 'Playlist cadastrado com sucesso', object: this.playList} }));
            } else {
                this.playList[indexPlaylist] = playlist;

                return of(new HttpResponse({ body: {status: 200, message: 'Playlist editado com sucesso', object: this.playList[indexPlaylist]} }));
            }

        } else if (request.method === "GET" && request.url.indexOf('getPlayList') > -1) {
            const idPlaylist = JSON.parse(request.url.replace("http://localhost:4200/getPlayList/", ""));
            const indexPlaylist = this.playList.findIndex(u => u.id === idPlaylist);

            return of(new HttpResponse({ body: {status: 200, message: 'Playlist encontrado com sucesso', object: this.playList[indexPlaylist]} }));

        } else if (request.method === "GET" && request.url === "http://localhost:4200/musics") {
            let musics: MusicaModel[] = [];

            this.playList.forEach(element => {
                element.musicas.forEach(music => {
                    if (musics.findIndex(v => v.id === music.id) === -1) {
                        musics.push(music);
                    }
                });
            });

            return of(new HttpResponse({ body: {status: 200, message: 'Listagem de todas músicas', object: musics} }));

        } 
        
        return next.handle(request);
    }
}
