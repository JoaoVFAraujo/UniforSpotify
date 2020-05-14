import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-playlist',
  templateUrl: './my-playlist.component.html',
  styleUrls: ['./my-playlist.component.css']
})
export class MyPlaylistComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}
