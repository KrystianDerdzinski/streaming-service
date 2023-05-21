import { Component, Input } from '@angular/core';
import { PlaylistItemInterface } from '../interfaces/playlist-item.interface';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent {
  @Input() playlistItems: PlaylistItemInterface[] = [];

  addShadow($event: MouseEvent) {
    const target: HTMLElement = $event.target as HTMLElement;
    target.classList.add('card-hover');
  }

  removeShadow($event: MouseEvent) {
    const target: HTMLElement = $event.target as HTMLElement;
    target.classList.remove('card-hover');
  }
}
