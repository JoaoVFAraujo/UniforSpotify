export class Pessoa {
    nome:string;
    email:string;
    senha:string;
    data:string;
    genero:string;
    compartilharDados:Boolean;

    constructor(nome:string, email:string, senha:string,data:string,genero:string, compartilharDados:Boolean){
        this.nome=nome;
        this.email=email;
        this.senha=senha;
        this.data=data;
        this.genero=genero;
        this.compartilharDados=compartilharDados;
    }
}