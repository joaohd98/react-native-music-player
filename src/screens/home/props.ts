import {RepositoryStatus} from "../../repositories/repository-status";
import {ReleasesResponse} from "../../repositories/releases/response";
import {FeaturedPlaylistResponse} from "../../repositories/playlist/response";

export interface HomeScreenPropsActions {
  getReleases: () => void;
  getFeaturedPlaylists: () => void;
}

export interface HomeScreenProps extends HomeScreenPropsActions {
  newReleases: ReleasesResponse[]
  statusReleases: RepositoryStatus
  playlists: FeaturedPlaylistResponse[]
  statusPlaylists: RepositoryStatus
}
