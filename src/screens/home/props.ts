import {RepositoryStatus} from "../../repositories/repository-status";
import {ReleasesResponse} from "../../repositories/releases/response";
import {FeaturedPlaylistResponse} from "../../repositories/playlist/response";
import {RecentsSongResponse} from "../../repositories/songs/recents-song-response";

export interface HomeScreenPropsActions {
  getReleases: () => void;
  getFeaturedPlaylists: () => void;
  getRecentsSongs: () => void;
}

export interface HomeScreenProps extends HomeScreenPropsActions {
  newReleases: ReleasesResponse[]
  statusReleases: RepositoryStatus
  playlists: FeaturedPlaylistResponse[]
  statusPlaylists: RepositoryStatus,
  songs: RecentsSongResponse[],
  statusSongs: RepositoryStatus
}
