import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //para pegar a tada emtempo real
  public now: Number = new Date().getUTCFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
