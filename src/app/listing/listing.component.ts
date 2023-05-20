import { Component, Input } from '@angular/core';
import { PlaylistItemInterface } from '../interfaces/playlist-item.interface';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent {
  @Input() playlistItems: PlaylistItemInterface[] = [];
}
