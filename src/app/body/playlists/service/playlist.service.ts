import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

    constructor(
        private httpClient: HttpClient) {
    }

    // Função para listar todos as playlist;
    listAllPlaylist(): Observable<any> {
        return this.httpClient.get('http://localhost:4200/playList')
            .pipe(
                catchError(this.handleError)
            );
    }

    // Esta função seria para logar, voce vai passar um JSON como { email: "admin@spotify.com.br", senha: "admin" }, e ele no meu intercept vai receber esses valores e procurar por um usuário assim e depois vai lhe responder um status 200 OK com o token, ou um status 404 e não ira encontrará o usuário;

    // login(login): Observable<any> {
    //     const body = JSON.stringify(login);

    //     return this.httpClient.post('http://localhost:4200/login', body)
    //         .pipe(
    //             catchError(this.handleError)
    //         );
    // }


    // Este codigo esta na documentação do Angular na parte de serviços;
    private handleError(error: HttpErrorResponse) {

        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${JSON.stringify(error.error)}`);
        }
        // return an observable with a host-facing error message
        return throwError(error.error);
    }

}
