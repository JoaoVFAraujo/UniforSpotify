export class Pessoa {
    nome: string;
    email: string;
    senha: string;
    data: string;
    genero: string;
    compartilharDados: Boolean;

    constructor(obj?: Pessoa){
        this.nome               = obj ? obj.nome                : null;
        this.email              = obj ? obj.email               : null;
        this.senha              = obj ? obj.senha               : null;
        this.data               = obj ? obj.data                : null;
        this.genero             = obj ? obj.genero              : null;
        this.compartilharDados  = obj ? obj.compartilharDados   : false;
    }
}