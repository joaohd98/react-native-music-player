import 'react-native';
import {HomeScreenProps} from "../props";
import {HomeScreenInitialState, HomeScreenReducer} from "./reducer";
import {
  RecentsSongResponse,
  RecentsSongResponseUriContentType,
  RecentsSongResponseUriType
} from "../../../repositories/songs/recents-song-response";
import {AnyAction, CombinedState, Store} from "redux";
import {
  FeaturedPlaylistResponse,
  FeaturedPlaylistResponseUriContentType,
  FeaturedPlaylistResponseUriType
} from "../../../repositories/playlist/response";
import {RepositoryStatus} from "../../../repositories/repository-status";
import {HomeScreenActionConst, HomeScreenActionType} from "./action-type";
import {ActionsType, ReducersProps} from "../../../redux/reducers";
import {
  ReleasesResponse,
  ReleasesResponseUriContentType,
  ReleasesResponseUriType
} from "../../../repositories/releases/response";
import {storeFactory} from "../../../utils/redux-test";
import {Reducer} from "react";
import {HomeScreenSaga, watchSagaHome} from "./saga";
import {call} from "@redux-saga/core/effects";
import {ReleasesRepository} from "../../../repositories/releases";
import {HomeScreenAction} from "./action";
import {SongsRepository} from "../../../repositories/songs";
import {PlaylistRepository} from "../../../repositories/playlist";
import {AxiosResponse} from "axios";
import {expectSaga, SagaType, testSaga} from "redux-saga-test-plan";

const getHomeScreenProps = (store: Store<CombinedState<ReducersProps>, ActionsType>): HomeScreenProps => {
  return store.getState().homeScreen!
}

function sagaFactory<T>(
  saga: SagaType,
  provider: [() => Promise<AxiosResponse<T>>, T | undefined],
  actionPut: HomeScreenActionType,
  expectedProps: HomeScreenProps
) {

  const homeReducer = HomeScreenReducer as Reducer<HomeScreenProps | undefined, AnyAction>

  return expectSaga(saga)
    .withReducer<HomeScreenProps | undefined>(homeReducer)
    .provide([[call(provider[0]), {data: provider[1]}]])
    .put(actionPut)
    .hasFinalState<HomeScreenProps>(expectedProps)
    .run();
}

describe('HomeRedux', () => {
  let store: Store<CombinedState<ReducersProps>, ActionsType>;

  beforeEach(() => {
    store = storeFactory();
  });

  it('action "getReleases"', () => {
    const exceptedState: HomeScreenProps = {
      ...HomeScreenInitialState,
      statusReleases: RepositoryStatus.LOADING,
      newReleases: []
    };

    store.dispatch({
      type: HomeScreenActionConst.getReleases,
      status: RepositoryStatus.LOADING
    })

    expect(getHomeScreenProps(store)).toStrictEqual(exceptedState)
  });

  it('action "getPlaylist"', () => {
    const exceptedState: HomeScreenProps = {
      ...HomeScreenInitialState,
      statusPlaylists: RepositoryStatus.LOADING,
      playlists: []
    };

    store.dispatch({
      type: HomeScreenActionConst.getFeaturedPlaylists,
      status: RepositoryStatus.LOADING
    })

    expect(getHomeScreenProps(store)).toStrictEqual(exceptedState)
  });

  it('action "getSongs"', () => {
    const exceptedState: HomeScreenProps = {
      ...HomeScreenInitialState,
      statusSongs: RepositoryStatus.LOADING,
      songs: []
    };

    store.dispatch({
      type: HomeScreenActionConst.getRecentsSong,
      status: RepositoryStatus.LOADING
    })

    expect(getHomeScreenProps(store)).toStrictEqual(exceptedState)
  });

  it('should call saga on dispatch', function () {
    testSaga(watchSagaHome)
      .next()
      .takeEvery(HomeScreenActionConst.getReleases, HomeScreenSaga.getNewReleases)
      .next()
      .takeEvery(HomeScreenActionConst.getFeaturedPlaylists, HomeScreenSaga.getFeaturedPlaylist)
      .next()
      .takeEvery(HomeScreenActionConst.getRecentsSong, HomeScreenSaga.getRecentsSong)
      .next()
  });

  describe("saga call 'releases'", () => {
    const releases: ReleasesResponse[] = []

    for(let i = 0; i < 10; i++) {
      releases.push({
        name: "name" + i,
        artistName: "artistName" + i,
        imageUri: "imageUri" + i
      })
    }

    it("saga 'getNewReleases' success", () => {
      const releasesUri: ReleasesResponseUriType = {
        albums: {
          items: releases.map<ReleasesResponseUriContentType>(release => ({
            name: release.name,
            artists: [{name: release.artistName}],
            images: [{url: release.imageUri}]
          }))
        }
      }

      const response = ReleasesResponse.uriContent(releasesUri)

      return sagaFactory<ReleasesResponseUriType>(
        HomeScreenSaga.getNewReleases,
        [ReleasesRepository.getReleases, releasesUri],
        HomeScreenAction.setReleases(RepositoryStatus.SUCCESS, response),
        {
          ...HomeScreenInitialState,
          statusReleases: RepositoryStatus.SUCCESS,
          newReleases: response
        }
      )
    })

    it("saga 'getNewReleases' failed", () => {
      return sagaFactory<ReleasesResponseUriType>(
        HomeScreenSaga.getNewReleases,
        [ReleasesRepository.getReleases, undefined],
        HomeScreenAction.setReleases(RepositoryStatus.FAILED, []),
        {
          ...HomeScreenInitialState,
          statusReleases: RepositoryStatus.FAILED,
          newReleases: []
        }
      )
    })
  })

  describe("saga call 'playlists'", () => {
    const playlists: FeaturedPlaylistResponse[] = []

    for(let i = 0; i < 10; i++) {
      playlists.push({
        name: "name" + i,
        imageUri: "imageUri" + i
      })
    }

    it("saga 'setPlaylist' success", () => {
      const releasesUri: FeaturedPlaylistResponseUriType = {
        playlists: {
          items: playlists.map<FeaturedPlaylistResponseUriContentType>(playlist => ({
            name: playlist.name,
            images: [{url: playlist.imageUri}]
          }))
        }
      }

      const response = FeaturedPlaylistResponse.uriContent(releasesUri)

      return sagaFactory<FeaturedPlaylistResponseUriType>(
        HomeScreenSaga.getFeaturedPlaylist,
        [PlaylistRepository.getFeaturedPlaylist, releasesUri],
        HomeScreenAction.setFeaturedPlaylists(RepositoryStatus.SUCCESS, response),
        {
          ...HomeScreenInitialState,
          statusPlaylists: RepositoryStatus.SUCCESS,
          playlists: response
        }
      )
    })

    it("saga 'getPlaylists' failed", () => {
      return sagaFactory<FeaturedPlaylistResponseUriType>(
        HomeScreenSaga.getFeaturedPlaylist,
        [PlaylistRepository.getFeaturedPlaylist, undefined],
        HomeScreenAction.setFeaturedPlaylists(RepositoryStatus.FAILED, []),
        {
          ...HomeScreenInitialState,
          statusPlaylists: RepositoryStatus.FAILED,
          playlists: []
        }
      )
    })
  })

  describe("saga call 'songs'", () => {
    const songs: RecentsSongResponse[] = []

    for(let i = 0; i < 10; i++) {
      songs.push({
        name: "name" + i,
        artistName: "artistName" + i,
        previewURL: "songs" + i,
        duration: "00:00" + i,
      })
    }

    it("saga 'getRecentsSongs' success", () => {
      const songUri: RecentsSongResponseUriType = {
        items: songs.map<{track: RecentsSongResponseUriContentType}>(track => ({
          track: {
            name: track.name,
            artists: [{name: track.artistName}],
            duration_ms: Math.floor(Math.random() * 100000),
            preview_url: track.previewURL,
          }
        }))
      }

      const response = RecentsSongResponse.uriContent(songUri)

      return sagaFactory<RecentsSongResponseUriType>(
        HomeScreenSaga.getRecentsSong,
        [SongsRepository.getRecentsSongs, songUri],
        HomeScreenAction.setRecentsSongs(RepositoryStatus.SUCCESS, response),
        {
          ...HomeScreenInitialState,
          statusSongs: RepositoryStatus.SUCCESS,
          songs: response
        }
      )
    })

    it("saga 'getRecentsSongs' failed", () => {
      return sagaFactory<RecentsSongResponseUriType>(
        HomeScreenSaga.getRecentsSong,
        [SongsRepository.getRecentsSongs, undefined],
        HomeScreenAction.setRecentsSongs(RepositoryStatus.FAILED, []),
        {
          ...HomeScreenInitialState,
          statusSongs: RepositoryStatus.FAILED,
          songs: []
        }
      )
    })
  })

});
