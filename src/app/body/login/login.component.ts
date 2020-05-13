import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formSingIn: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService) {

      this.setForm();
    }

  ngOnInit(): void { }

  setForm() {
    this.formSingIn = this.fb.group({
      email: [ null, [Validators.required, Validators.email] ],
      senha: [ null, [Validators.required, Validators.minLength(6), Validators.maxLength(60)] ]
    });
  }

  onSubmit(formValue) {

    this.loginService.login(formValue).subscribe(
      (succ) => {
        if (succ.status === 200) {
          alert(succ.message);
          this.router.navigate(['/playlists']);

          sessionStorage.setItem('token', succ.object.token);
          sessionStorage.setItem('idUser', succ.object.idUser);

        } else {
          alert(succ.message);
        }
      }
    )

  }

}
