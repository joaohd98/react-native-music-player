import {HomeScreenActionConst, HomeScreenActionType} from "./action-type";
import {RepositoryStatus} from "../../../repositories/repository-status";
import {ReleasesResponse} from "../../../repositories/releases/response";
import {FeaturedPlaylistResponse} from "../../../repositories/playlist/response";

type Response = HomeScreenActionType;

export class HomeScreenAction {
  static getReleases = (): Response => ({
    type: HomeScreenActionConst.getReleases,
    status: RepositoryStatus.LOADING
  });

  static setReleases = (status: RepositoryStatus, releases: ReleasesResponse[]): Response => ({
    type: HomeScreenActionConst.setReleases,
    status,
    releases
  });

  static getFeaturedPlaylists = (): Response => ({
    type: HomeScreenActionConst.getFeaturedPlaylists,
    status: RepositoryStatus.LOADING
  });

  static setFeaturedPlaylists = (status: RepositoryStatus, playlists: FeaturedPlaylistResponse[]): Response => ({
    type: HomeScreenActionConst.setFeaturedPlaylists,
    status,
    playlists
  });

}
