import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormUserService } from './service/form-user.service';
import { PessoaModel } from 'src/app/model/pessoa-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  userId: string;
  user: PessoaModel;
  formEditUser: FormGroup;

  minDate: Date;
  maxDate: Date;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formUserService: FormUserService) {

      this.getInfo();
      this.getUser();

  }

  ngOnInit(): void { }

  getInfo() {
    this.userId = this.activatedRoute.snapshot.params.userId;

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDate = new Date().getDate();

    this.minDate = new Date(1920, 0, 1);
    this.maxDate = new Date(currentYear, currentMonth, currentDate);
  }

  getUser() {
    this.formUserService.getUserById(this.userId).subscribe(
      (succ) => {
        this.user = succ.body;
        this.formEditUser = this.fb.group({
          id                : [ this.user.id ],
          nome              : [ this.user.nome, Validators.required ],
          email             : [ this.user.email, [Validators.required, Validators.email] ],
          senha             : [ null ],
          data              : [ this.user.data, Validators.required ],
          genero            : [ this.user.genero, Validators.required ],
          compartilharDados : [ this.user.compartilharDados ]
        });
      }
    );
  }

  onSubmit(formValue: PessoaModel) {
    this.formUserService.editUser(formValue).subscribe(
      (succ) => {
        this.router.navigate(['/listUser']);
        alert(succ.message);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  cancel() {
    this.router.navigate(['/listUser']);
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}
