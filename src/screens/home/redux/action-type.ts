import {Action} from "redux";
import {RepositoryStatus} from "../../../repositories/repository-status";
import {ReleasesResponse} from "../../../repositories/releases/response";
import {FeaturedPlaylistResponse} from "../../../repositories/playlist/response";

export enum HomeScreenActionConst {
  getReleases = "HomeScreenActionConst/getReleases",
  setReleases = "HomeScreenActionConst/setReleases",
  getFeaturedPlaylists = "HomeScreenActionConst/getFeaturedPlaylists",
  setFeaturedPlaylists = "HomeScreenActionConst/setFeaturedPlaylists",
}

interface GetNewReleases extends Action<HomeScreenActionConst.getReleases> {
  type: HomeScreenActionConst.getReleases,
  status: RepositoryStatus
}

interface SetNewReleases extends Action<HomeScreenActionConst.setReleases> {
  type: HomeScreenActionConst.setReleases,
  status: RepositoryStatus,
  releases: ReleasesResponse[],
}

interface GetFeaturedPlaylists extends Action<HomeScreenActionConst.getFeaturedPlaylists> {
  type: HomeScreenActionConst.getFeaturedPlaylists,
  status: RepositoryStatus
}

interface SetFeaturedPlaylists extends Action<HomeScreenActionConst.setFeaturedPlaylists> {
  type: HomeScreenActionConst.setFeaturedPlaylists,
  status: RepositoryStatus,
  playlists: FeaturedPlaylistResponse[],
}

export type HomeScreenActionType =
  GetNewReleases | SetNewReleases |
  GetFeaturedPlaylists | SetFeaturedPlaylists
