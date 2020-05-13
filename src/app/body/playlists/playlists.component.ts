import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}
