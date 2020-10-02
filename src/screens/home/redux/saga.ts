import {call, put, takeEvery} from '@redux-saga/core/effects'
import {HomeScreenAction} from "./action";
import {RepositoryStatus} from "../../../repositories/repository-status";
import {HomeScreenActionConst} from "./action-type";
import {ReleasesRepository} from "../../../repositories/releases";
import {ReleasesResponse} from "../../../repositories/releases/response";
import {PlaylistRepository} from "../../../repositories/playlist";
import {FeaturedPlaylistResponse} from "../../../repositories/playlist/response";
import {SongsRepository} from "../../../repositories/songs";
import {RecentsSongResponse} from "../../../repositories/songs/recents-song-response";

export class HomeSaga {
  static *getNewReleases() {
    try {
      const result = yield call(ReleasesRepository.getReleases);
      yield put(HomeScreenAction.setReleases(RepositoryStatus.SUCCESS, ReleasesResponse.uriContent(result.data)))
    }
    catch(error) {
      yield put(HomeScreenAction.setReleases(RepositoryStatus.FAILED, []))
    }
  }

  static *getFeaturedPlaylist() {
    try {
      const result = yield call(PlaylistRepository.getFeaturedPlaylist);
      const playlists = FeaturedPlaylistResponse.uriContent(result.data)

      yield put(HomeScreenAction.setFeaturedPlaylists(RepositoryStatus.SUCCESS, playlists))
    }
    catch(error) {
      yield put(HomeScreenAction.setFeaturedPlaylists(RepositoryStatus.FAILED, []))
    }
  }

  static *getRecentsSong() {
    try {
      const result = yield call(SongsRepository.getRecentsSongs);
      const songs = RecentsSongResponse.uriContent(result.data)

      yield put(HomeScreenAction.setRecentsSongs(RepositoryStatus.SUCCESS, songs))
    }
    catch(error) {
      yield put(HomeScreenAction.setRecentsSongs(RepositoryStatus.FAILED, []))
    }
  }
}


export const HomeScreenSaga = [
  takeEvery(HomeScreenActionConst.getReleases, HomeSaga.getNewReleases),
  takeEvery(HomeScreenActionConst.getFeaturedPlaylists, HomeSaga.getFeaturedPlaylist),
  takeEvery(HomeScreenActionConst.getRecentsSong, HomeSaga.getRecentsSong)
];
