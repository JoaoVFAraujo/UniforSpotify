import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ServiceRegistroService } from 'src/app/service/service-registro.service';
import { Pessoa } from 'src/app/module/cadastro';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  formSingUp: FormGroup;
  formConfirmaEmail = new FormControl('', [Validators.email, Validators.required]);
  politicaEtermos = new FormControl('', Validators.required);
  minDate: Date;
  maxDate: Date;

  constructor(
    private fb: FormBuilder,
    private service: ServiceRegistroService) {

      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth();
      const currentDate = new Date().getDate();

      this.minDate = new Date(1920, 0, 1);
      this.maxDate = new Date(currentYear, currentMonth, currentDate);

      this.formSingUp = this.fb.group({
        nome              : [ '', [Validators.required, Validators.minLength(2)] ],
        email             : [ '', [Validators.email, Validators.required] ],
        senha             : [ '', [Validators.required, Validators.minLength(6), Validators.maxLength(60)] ],
        data              : [ '', [Validators.required, Validators.min(1), Validators.max(31)] ],
        genero            : [ '', Validators.required ],
        compartilharDados : [ false ]
      });

      this.politicaEtermos.valueChanges.subscribe(v => {
        if (!v) {
          this.politicaEtermos.setErrors({ 'incorrect': true });
        }
      })

  }

  onSubmit(valueForm) {

    let pessoa: Pessoa = new Pessoa(valueForm);
    this.service.setPessoa(pessoa);

    if (this.service.getPessoas()) {
      alert("Cadastrado realizado com sucesso!")
      this.formSingUp.reset('');
    }
  }

  MaiorQue18Anos(): boolean {
    if (this.formSingUp.get('data').status !== 'INVALID') {
      const data = new Date(this.formSingUp.get('data').value);
      const hoje = new Date();
      const tempoParaTeste = 1000 * 60 * 60 * 24 * 365 * 18; //18 anos em mili segundos...

      if (hoje.getTime() - data.getTime() >= tempoParaTeste) {
        return true;
      } else {
        return false;
      }
    }
  }

  emailsIguais(): boolean {
    if (this.formSingUp.get('email').status !== 'INVALID' && this.formConfirmaEmail.status !== 'INVALID') {

      if (this.formSingUp.get('email').value === this.formConfirmaEmail.value) {
        return true;
      } else {
        return false;
      }
    }
  }
}