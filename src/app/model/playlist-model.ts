import { MusicaModel } from './musica-model';

export class PlaylistModel {
    id: number;
    nome: string;
    image: string;
    userId: number;
    musicas: MusicaModel[];

    constructor(obj?: PlaylistModel){
        this.id         = obj ? obj.id      : null;
        this.nome       = obj ? obj.nome    : null;
        this.image      = obj ? obj.image   : null;
        this.userId     = obj ? obj.userId  : null;
        this.musicas    = obj ? obj.musicas : null;
    }
}