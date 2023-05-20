import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  @Input() videoId = 'dQw4w9WgXcQ';
  videoUrl = '';

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.videoUrl = `https://www.youtube.com/embed/${this.videoId}`;
  }
}
