import 'react-native';
import {AnyAction, CombinedState, Store} from "redux";
import {ActionsType, ReducersProps} from "../../../../redux/reducers";
import {storeFactory} from "../../../../utils/redux-test";
import {HomeScreenProps} from "../../props";
import {HomeScreenInitialState, HomeScreenReducer} from "../reducer";
import {RepositoryStatus} from "../../../../repositories/repository-status";
import {HomeScreenActionConst} from "../action-type";
import {expectSaga} from "redux-saga-test-plan";
import {HomeSaga} from "../saga";
import {call} from "@redux-saga/core/effects";
import {HomeScreenAction} from "../action";
import {Reducer} from "react";
import {
  RecentsSongResponse,
  RecentsSongResponseUriContentType, RecentsSongResponseUriType
} from "../../../../repositories/songs/recents-song-response";
import {SongsRepository} from "../../../../repositories/songs";

const getHomeScreenProps = (store: Store<CombinedState<ReducersProps>, ActionsType>): HomeScreenProps => {
  return store.getState().homeScreen!
}

const getSongs = () => {
  const songs: RecentsSongResponse[] = []

  for(let i = 0; i < 10; i++) {
    songs.push({
      name: "name" + i,
      artistName: "artistName" + i,
      song: "songs" + i,
      duration: "00:00" + i,
    })
  }

  return songs
}

const getHomeReducerAnyAction = () => {
  return HomeScreenReducer as Reducer<HomeScreenProps | undefined, AnyAction>
}

describe('HomeSongsRedux', () => {
  let store: Store<CombinedState<ReducersProps>, ActionsType>;

  beforeEach(() => {
    store = storeFactory();
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

  it("saga 'getRecentsSongs' success", () => {
    const songUri: RecentsSongResponseUriType = {
      albums: {
        items: getSongs().map<RecentsSongResponseUriContentType>(track => ({
          name: track.name,
          artists: [{name: track.artistName}],
          duration_ms: Math.floor(Math.random() * 100000),
          preview_url: track.song,
        }))
      }
    }

    const songs = RecentsSongResponse.uriContent(songUri)

    return expectSaga(HomeSaga.getRecentsSong)
      .withReducer<HomeScreenProps | undefined>(getHomeReducerAnyAction())
      .provide([[call(SongsRepository.getRecentsSongs), {data: songUri}]])
      .put(HomeScreenAction.setRecentsSongs(RepositoryStatus.SUCCESS, songs))
      .hasFinalState<HomeScreenProps>({
        ...HomeScreenInitialState,
        statusSongs: RepositoryStatus.SUCCESS,
        songs
      })
      .run();
  })

  it("saga 'getRecentsSongs' failed", () => {
    return expectSaga(HomeSaga.getRecentsSong)
      .withReducer<HomeScreenProps | undefined>(getHomeReducerAnyAction())
      .provide([[call(SongsRepository.getRecentsSongs), undefined]])
      .put(HomeScreenAction.setRecentsSongs(RepositoryStatus.FAILED, []))
      .hasFinalState<HomeScreenProps>({
        ...HomeScreenInitialState,
        statusSongs: RepositoryStatus.FAILED,
        songs: []
      })
      .run();
  })
});
