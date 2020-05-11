export class MusicaModel {
    id: number;
    title: string;
    album: string;
    tempo: number;
    link: string;

    constructor(obj?: MusicaModel){
        this.id     = obj ? obj.id      : null;
        this.title  = obj ? obj.title   : null;
        this.album  = obj ? obj.album   : null;
        this.tempo  = obj ? obj.tempo   : null;
        this.link   = obj ? obj.link    : null;
    }
}