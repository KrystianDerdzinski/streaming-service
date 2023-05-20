import { PlaylistItemInterface } from './playlist-item.interface';

export interface PlaylistItemListResponseInterface {
  kind: 'youtube#playlistItemListResponse';
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: PlaylistItemInterface[];
}
