import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { PessoaModel } from 'src/app/model/pessoa-model';
import { ListUserService } from './service/list-user-service.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'email', 'data'];
  dataSource = new MatTableDataSource<PessoaModel>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(private listUserService: ListUserService) {

    this.listUserService.listAllUsers().subscribe(
      (succ) => {
        this.dataSource = new MatTableDataSource<PessoaModel>(succ.object);
      }
    )
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}