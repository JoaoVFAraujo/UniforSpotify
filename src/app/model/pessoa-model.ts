export class PessoaModel {
    id?: number;
    nome?: string;
    email?: string;
    senha?: string;
    data?: Date;
    genero?: string;
    compartilharDados?: Boolean;

    constructor(obj?: PessoaModel){
        this.id                 = obj ? obj.id                  : null;
        this.nome               = obj ? obj.nome                : null;
        this.email              = obj ? obj.email               : null;
        this.senha              = obj ? obj.senha               : null;
        this.data               = obj ? obj.data                : null;
        this.genero             = obj ? obj.genero              : null;
        this.compartilharDados  = obj ? obj.compartilharDados   : false;
    }
}