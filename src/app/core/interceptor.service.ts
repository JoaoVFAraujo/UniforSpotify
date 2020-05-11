import { PlayListMock } from './../playlist-mock/playlist-mock';
import { Injectable, ɵConsole } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {

    playList: Array<any> = PlayListMock;
    listUsers: Array<any> = [
        {
          id: 1,
          nome: "admin",
          email: "admin@spotify.com.br",
          senha: "admin",
          genero: "any",
          compartilharDados: true,
          data: new Date(1990, 0, 1)
        }
    ];

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (request.method === "GET" && request.url === "http://localhost:4200/playList") {
            return of(new HttpResponse({ body: {status: 200, message: 'Listagem de todas playlist', object: this.playList} }));

        } else if (request.method === "POST" && request.url === "http://localhost:4200/user") {
            const user = JSON.parse(request.body);
            if (!user.id) {
                user.id = this.listUsers.length + 1;
                this.listUsers.push(user);

                return of(new HttpResponse({ body: {status: 200, message: 'Usuário cadastrado com sucesso', object: this.listUsers} }));
            } else {
                const indexUser = this.listUsers.findIndex(u => u.id === user.id);
                this.listUsers[indexUser] = user;

                return of(new HttpResponse({ body: {status: 200, message: 'Usuário editado com sucesso', object: this.listUsers} }));
            }

        }  else if (request.method === "POST" && request.url === "http://localhost:4200/login") {
            const user = JSON.parse(request.body);

            if (this.listUsers.findIndex(u => u.email === user.email && u.senha === user.senha) > -1) {
                let token = '';
                for (var i = 80; i > 0; --i) token += (Math.floor(Math.random()*256)).toString(16);
                
                return of(new HttpResponse({ body: {status: 200, token: token} }));
            } else {
                return of(new HttpResponse({ body: {status: 404, message: 'Usuário não encontrado'} }));
            }
            
        } else if (request.method === "GET" && request.url.indexOf('getUser') > -1 ) {
            const idUser = JSON.parse(request.url.replace("http://localhost:4200/getUser/", ""));
            const indexUser = this.listUsers.findIndex(u => u.id === idUser);

            return of(new HttpResponse({ body: {status: 200, message: 'Usuário encontrado com sucesso', object: this.listUsers[indexUser]} }));
        }
        
        return next.handle(request);
    }
}
