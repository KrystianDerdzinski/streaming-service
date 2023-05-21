import { PLAYLIST_IDS } from './../PLAYLIST_IDS.const';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { API_KEY } from '../API_KEY.const';
import { PlaylistItemListResponseInterface } from '../interfaces/playlist-item-list-response.interface';
import { PlaylistInterface } from '../interfaces/playlist.interface';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  playlistsData: Observable<PlaylistItemListResponseInterface>[] = [];
  playlistNames: Observable<string>[] = [];

  ngOnInit(): void {
    this.playlistsData = PLAYLIST_IDS.map((playlistId) => {
      return this.getPlaylistItems(playlistId);
    });

    this.playlistNames = PLAYLIST_IDS.map((playlistId) => {
      return this.getPlaylistName(playlistId);
    });
  }

  constructor(private httpClient: HttpClient) {}

  getPlaylistItems(playlistId: string) {
    return this.httpClient.get<PlaylistItemListResponseInterface>(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=${playlistId}&key=${API_KEY}`
    );
  }

  getPlaylistName(playlistId: string) {
    return this.httpClient
      .get<PlaylistInterface>(
        `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${API_KEY}`
      )
      .pipe(map((data) => data.items[0].snippet.title));
  }
}
