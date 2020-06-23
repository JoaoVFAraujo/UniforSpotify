import { Component, OnInit } from '@angular/core';
import { PlaylistModel } from 'src/app/model/playlist-model';
import { MyPlaylistService } from '../../service/my-playlist.service';

@Component({
  selector: 'app-my-image-playlist',
  templateUrl: './my-image-playlist.component.html',
  styleUrls: ['./my-image-playlist.component.css']
})
export class MyImagePlaylistComponent implements OnInit {

  playList: PlaylistModel[] = [];
  userId: number = +sessionStorage.getItem('userId');

  constructor(private myPlaylistService: MyPlaylistService) {

    this.myPlaylistService.getPlayListByuserId(this.userId).subscribe(
      (succ) => {
        this.playList = succ.body;
      }
    );

  }

  ngOnInit(): void { }

}
