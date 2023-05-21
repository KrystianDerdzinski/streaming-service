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
  playlistItems: Observable<PlaylistItemInterface[]> =
    this.getPlaylistItems('PL8B03F998924DA45B');

  playlistItems2: Observable<PlaylistItemInterface[]> = this.getPlaylistItems(
    'PLu8EB-prPnmKmdpnI5O9SZoPjh4FNzquX'
  );

  constructor(private httpClient: HttpClient) {}

  getPlaylistItems(playlistId: string) {
    return this.httpClient
      .get<PlaylistItemListResponseInterface>(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=${playlistId}&key=${API_KEY}`
      )
      .pipe(map((data) => data.items));
  }
}
