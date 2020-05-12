import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormUserService } from './service/form-user.service';
import { PessoaModel } from 'src/app/model/pessoa-model';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  userId: string;
  user: PessoaModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formUserService: FormUserService) {

      this.userId = this.activatedRoute.snapshot.params.userId;

      this.formUserService.getUserById(this.userId).subscribe(
        (succ) => {
          this.user = succ.object;
        }
      );

      console.log(this.user);
  }

  ngOnInit(): void {
  }

}
