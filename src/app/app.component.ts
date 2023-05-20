import { Component, OnInit } from '@angular/core';
import { API_KEY } from './API_KEY.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'streaming-service';

  ngOnInit(): void {
    this.getPlaylistItems();
  }

  getPlaylistItems() {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PL8B03F998924DA45B&key=${API_KEY}`
    )
      .then((data) => data.json())
      .then((data) => console.log(data));
  }
}
