import { MusicaModel } from './musica-model';

export class PlaylistModel {
    id: number;
    nome: string;
    image: string;
    idUser: number;
    musicas: MusicaModel[];

    constructor(obj?: PlaylistModel){
        this.id         = obj ? obj.id      : null;
        this.nome       = obj ? obj.nome    : null;
        this.image      = obj ? obj.image   : null;
        this.idUser     = obj ? obj.idUser  : null;
        this.musicas    = obj ? obj.musicas : null;
    }
}