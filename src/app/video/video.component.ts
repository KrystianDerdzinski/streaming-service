import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  videoId = 'dQw4w9WgXcQ';
  videoUrl = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.videoId = params['id'];
      this.videoUrl = `https://www.youtube.com/embed/${this.videoId}`;
    });
  }
}
