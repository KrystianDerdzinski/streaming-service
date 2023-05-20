import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { API_KEY } from '../API_KEY.const';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  playlistItems: Observable<unknown> = this.getPlaylistItems();

  constructor(private httpClient: HttpClient) {}

  getPlaylistItems() {
    return this.httpClient
      .get(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PL8B03F998924DA45B&key=${API_KEY}`
      )
      .pipe(tap((data) => console.log(data)));
  }
}
