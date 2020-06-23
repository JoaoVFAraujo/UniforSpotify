import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-img-playlists',
})
export class ExemplosComponent {

  constructor(private httpClient: HttpClient) { }

    // função de exemplo para todos sevicções 
    exemplo() {

        // Cadastrando usuário;
        const user = JSON.stringify({ nome: "joao", email: "joao@spotify.com.br", senha: "joao", genero: "m", compartilharDados: false, data: new Date(1990, 0, 1) });

        this.httpClient.post('http://localhost:8080/user', user).subscribe(
            (succ: any) => {
                console.log("Cadastro de usuário: ", succ);
            }
        );

        // --------------------------------------------------------------------------------------

        // Editando usuário, é só passar o id dele no json;
        const editUser = JSON.stringify({ id: 2, nome: "davi", email: "davi@spotify.com.br", senha: "davi", genero: "m", compartilharDados: false, data: new Date(1990, 0, 1) });

        this.httpClient.post('http://localhost:8080/user', editUser).subscribe(
            (succ: any) => {
                console.log("Editando usuário: ", succ);
            }
        );

        // --------------------------------------------------------------------------------------

        // Buscando todos usuários;
        this.httpClient.get('http://localhost:8080/user').subscribe(
            (succ: any) => {
                console.log("Buscando todos usuários: ", succ);
            }
        );

        // --------------------------------------------------------------------------------------

        // Buscando usuário específico por ID;
        this.httpClient.get('http://localhost:8080/getUser/2').subscribe(
            (succ: any) => {
                console.log("Buscando usuário específico: ", succ);
            }
        );

        // --------------------------------------------------------------------------------------

        // Login
        const login = JSON.stringify({ email: "admin@spotify.com.br", senha: "admin" });

        this.httpClient.post('http://localhost:8080/login', login).subscribe(
            (succ: any) => {
                console.log("Login: ", succ);
            }
        );

        // --------------------------------------------------------------------------------------

        // Cadastrando playList;
        const playlist = JSON.stringify({ nome: "PlayList de teste", userId: 2, image: "", musicas: [] });

        this.httpClient.post('http://localhost:8080/playlist', playlist).subscribe(
            (succ: any) => {
                console.log("Cadastrando playList: ", succ);
            }
        );

        // --------------------------------------------------------------------------------------

        // Editando playList;
        const editPlaylist = JSON.stringify({ id: 4, nome: "PlayList teste de edição", userId: 2, image: "", musicas: [] });

        this.httpClient.post('http://localhost:8080/playlist', editPlaylist).subscribe(
            (succ: any) => {
                console.log("Editando playList: ", succ);
            }
        );

        // --------------------------------------------------------------------------------------

        // Buscando todos playList;
        this.httpClient.get('http://localhost:8080/playlist').subscribe(
            (succ: any) => {
                console.log("Buscando todas playlist: ", succ);
            }
        );

        // --------------------------------------------------------------------------------------

        // Buscando playlist específico por ID;
        this.httpClient.get('http://localhost:8080/getPlayList/4').subscribe(
            (succ: any) => {
                console.log("Buscando playlist específico: ", succ);
            }
        );
        
        // --------------------------------------------------------------------------------------

        // Buscando todas musicas;
        this.httpClient.get('http://localhost:8080/music').subscribe(
            (succ: any) => {
                console.log("Buscando todas musicas: ", succ);
            }
        );

    }

}