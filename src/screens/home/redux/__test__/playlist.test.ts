import 'react-native';
import {AnyAction, CombinedState, Store} from "redux";
import {ActionsType, ReducersProps} from "../../../../redux/reducers";
import {storeFactory} from "../../../../utils/redux-test";
import {HomeScreenProps} from "../../props";
import {HomeScreenInitialState, HomeScreenReducer} from "../reducer";
import {RepositoryStatus} from "../../../../repositories/repository-status";
import {HomeScreenActionConst} from "../action-type";
import {
  ReleasesResponse,
  ReleasesResponseUriContentType,
  ReleasesResponseUriType
} from "../../../../repositories/releases/response";
import {expectSaga} from "redux-saga-test-plan";
import {HomeSaga} from "../saga";
import {call} from "@redux-saga/core/effects";
import {ReleasesRepository} from "../../../../repositories/releases";
import {HomeScreenAction} from "../action";
import {Reducer} from "react";
import {
  FeaturedPlaylistResponse,
  FeaturedPlaylistResponseUriContentType,
  FeaturedPlaylistResponseUriType
} from "../../../../repositories/playlist/response";
import {PlaylistRepository} from "../../../../repositories/playlist";

const getHomeScreenProps = (store: Store<CombinedState<ReducersProps>, ActionsType>): HomeScreenProps => {
  return store.getState().homeScreen!
}

const getPlaylists = () => {
  const playlists: FeaturedPlaylistResponse[] = []

  for(let i = 0; i < 10; i++) {
    playlists.push({
      name: "name" + i,
      imageUri: "imageUri" + i
    })
  }

  return playlists
}

const getHomeReducerAnyAction = () => {
  return HomeScreenReducer as Reducer<HomeScreenProps | undefined, AnyAction>
}

describe('HomePlaylistRedux', () => {
  let store: Store<CombinedState<ReducersProps>, ActionsType>;

  beforeEach(() => {
    store = storeFactory();
  });

  it('action "getReleases"', () => {
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

  it("saga 'setPlaylist' success", () => {
    const releasesUri: FeaturedPlaylistResponseUriType = {
      playlists: {
        items: getPlaylists().map<FeaturedPlaylistResponseUriContentType>(playlist => ({
          name: playlist.name,
          images: [{url: playlist.imageUri}]
        }))
      }
    }

    const playlists = FeaturedPlaylistResponse.uriContent(releasesUri)

    return expectSaga(HomeSaga.getFeaturedPlaylist)
      .withReducer<HomeScreenProps | undefined>(getHomeReducerAnyAction())
      .provide([[call(PlaylistRepository.getFeaturedPlaylist), {data: releasesUri}]])
      .put(HomeScreenAction.setFeaturedPlaylists(RepositoryStatus.SUCCESS, playlists))
      .hasFinalState<HomeScreenProps>({
        ...HomeScreenInitialState,
        statusPlaylists: RepositoryStatus.SUCCESS,
        playlists
      })
      .run();
  })

  it("saga 'getNewReleases' failed", () => {
    return expectSaga(HomeSaga.getFeaturedPlaylist)
      .withReducer<HomeScreenProps | undefined>(getHomeReducerAnyAction())
      .provide([[call(PlaylistRepository.getFeaturedPlaylist), undefined]])
      .put(HomeScreenAction.setFeaturedPlaylists(RepositoryStatus.FAILED, []))
      .hasFinalState<HomeScreenProps>({
        ...HomeScreenInitialState,
        statusPlaylists: RepositoryStatus.FAILED,
        playlists: []
      })
      .run();
  })
});
