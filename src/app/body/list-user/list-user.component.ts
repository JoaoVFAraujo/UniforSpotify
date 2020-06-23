import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { PessoaModel } from 'src/app/model/pessoa-model';
import { ListUserService } from './service/list-user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'email', 'data', 'acao'];
  dataSource = new MatTableDataSource<PessoaModel>([]);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(
    private listUserService: ListUserService,
    private router: Router) {

    this.listUserService.listAllUsers().subscribe(
      (succ) => {
        this.dataSource = new MatTableDataSource<PessoaModel>(succ.body);
      }
    );
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}