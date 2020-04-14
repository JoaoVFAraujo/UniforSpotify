import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceRegistroService } from 'src/app/service/service-registro.service';
import { Pessoa } from 'src/app/module/cadastro';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public formulario: FormGroup;
  public Meses: any[] = [
    {'name':'Janeiro', 'id':1},
    {'name':'Fevereiro', 'id':2},
    {'name':'Março', 'id':3},
    {'name':'Abril', 'id':4},
    {'name':'Maio', 'id':5},
    {'name':'Junho', 'id':6},
    {'name':'Julho', 'id':7},
    {'name':'Agosto', 'id':8},
    {'name':'Setembro', 'id':9},
    {'name':'Outubro', 'id':10},
    {'name':'Novembro', 'id':11},
    {'name':'Dezembro', 'id':12},
  ];
  Mes;
  mensagem;

  constructor(private router: Router,private fb: FormBuilder, private service:ServiceRegistroService) { }

  ngOnInit(): void {
    this.creat();
    
  }
 
  creat () {
    this.formulario = this.fb.group({
      email: ['',Validators.compose([Validators.email])],
      confirmar:['',Validators.compose([Validators.email])],
      senha: ['', Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(100)])],
      dia:['',Validators.compose([Validators.required])],
      mes:[this.Mes,Validators.compose([Validators.required])],
      ano: ['',Validators.compose([Validators.required])],
      nome:['',Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(100)])],
      genero:['',Validators.compose([Validators.required])],
      compartilharDados:[Boolean],
      politicaEtermos:[Boolean,Validators.compose([Validators.required])],
    });

  }


  onSubmit() {
    
    this.mensagem='';
    if(this.emailsIguais() && this.MaiorQue18Anos() && this.verifica()==true ){
     
      let nome   = this.formulario.get('nome').value;
      let email  = this.formulario.get('email').value;
      let senha  = this.formulario.get('senha').value;
      let data   = this.formulario.get('dia').value+'/'+this.formulario.get('mes').value+'/'+this.formulario.get('ano').value;
      let genero = this.formulario.get('genero').value;
    
      let compartilharDados = false;
      if(this.formulario.get('compartilharDados').value===true){
        compartilharDados = true;
      }
      //criando pessoa e adicionando a service
      let pessoa:Pessoa = new Pessoa(nome,email,senha,data,genero,compartilharDados);
      this.service.setPessoa(pessoa);
      this.service.getPessoas();

      alert("Cadastrado realizado com sucesso!")
      this.formulario.reset('');

    }else if(!this.emailsIguais()){
      this.mensagem='* Os e-mails estão divergindo.';
    }else if(!this.MaiorQue18Anos()){
      alert('* Para realizar o cadastro é necessário possuir 18 anos.');
    }else if(!this.verifica()){
      alert('Campos não estão preenchidos ou estão incorretos. Tente novamente.');
    }

  }

    MaiorQue18Anos():boolean {
    const ano = this.formulario.get('ano').value;
    const mes = this.formulario.get('mes').value;
    const dia = this.formulario.get('dia').value;
    const hoje = new Date();
    const dataNascimento = new Date(ano, mes, dia, 0, 0, 0);
    const tempoParaTeste = 1000 * 60 * 60 * 24 * 365 * 18; //18 anos em mili segundos...

    if (hoje.getTime() - dataNascimento.getTime() >= tempoParaTeste){
      return true;
    }else{
      return false;
    }
  }

   emailsIguais():boolean{
    if(this.formulario.get('email').value === this.formulario.get('confirmar').value){
      return true;
    }else{ return false;}
  }


  verifica(): boolean{
    if(   !this.formulario.get("nome").valid
       || !this.formulario.get("senha").valid
       || !this.formulario.get("dia").valid
       || !this.formulario.get("mes").valid
       || !this.formulario.get("ano").valid
       || !this.formulario.get("genero").valid
       || !this.formulario.get("politicaEtermos").valid
    ){       
       return false;
    }else {
   return true;}
  }

  //Pra mostar erros na pagina
  get nome() {
    return this.formulario.get('nome');
  }

  get email() {
    return this.formulario.get('email');
  }

  get senha(){
    return this.formulario.get('senha');
  }

  get dia(){
    return this.formulario.get('dia');
  }

  get mes(){
    return this.formulario.get('mes');
  }

  get ano(){
    return this.formulario.get('ano');
  }

  get genero(){
    return this.formulario.get('genero');
  }
   get politicaEtermos(){
    return this.formulario.get('politicaEtermos');
   }
}