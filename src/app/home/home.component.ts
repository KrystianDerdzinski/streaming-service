import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { API_KEY } from '../API_KEY.const';
import { PlaylistItemInterface } from '../interfaces/playlist-item.interface';
import { PlaylistItemListResponseInterface } from '../interfaces/playlist-item-list-response.interface';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  playlistItems: Observable<PlaylistItemInterface[]> = this.getPlaylistItems();

  constructor(private httpClient: HttpClient) {}

  getPlaylistItems() {
    return this.httpClient
      .get<PlaylistItemListResponseInterface>(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PL8B03F998924DA45B&key=${API_KEY}`
      )
      .pipe(map((data) => data.items));
  }
}
