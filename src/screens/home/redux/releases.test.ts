import 'react-native';
import {AnyAction, CombinedState, Store} from "redux";
import {ActionsType, ReducersProps} from "../../../redux/reducers";
import {storeFactory} from "../../../utils/redux-test";
import {HomeScreenProps} from "../props";
import {HomeScreenInitialState, HomeScreenReducer} from "./reducer";
import {RepositoryStatus} from "../../../repositories/repository-status";
import {HomeScreenActionConst} from "./action-type";
import {
  ReleasesResponse,
  ReleasesResponseUriContentType,
  ReleasesResponseUriType
} from "../../../repositories/releases/response";
import {expectSaga} from "redux-saga-test-plan";
import {HomeSaga} from "./saga";
import {call} from "@redux-saga/core/effects";
import {ReleasesRepository} from "../../../repositories/releases";
import {HomeScreenAction} from "./action";
import {Reducer} from "react";

const getHomeScreenProps = (store: Store<CombinedState<ReducersProps>, ActionsType>): HomeScreenProps => {
  return store.getState().homeScreen!
}

const getReleases = () => {
  const releases: ReleasesResponse[] = []

  for(let i = 0; i < 10; i++) {
    releases.push({
      name: "name" + i,
      artistName: "artistName" + i,
      imageUri: "imageUri" + i
    })
  }

  return releases
}

const getHomeReducerAnyAction = () => {
  return HomeScreenReducer as Reducer<HomeScreenProps | undefined, AnyAction>
}

describe('HomeReleasesRedux', () => {
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

  it('action "setReleases" success', () => {
    const releases = getReleases()

    const exceptedState: HomeScreenProps = {
      ...HomeScreenInitialState,
      statusReleases: RepositoryStatus.SUCCESS,
      newReleases: releases
    };

    store.dispatch({
      type: HomeScreenActionConst.setReleases,
      status: RepositoryStatus.SUCCESS,
      releases: releases
    })

    expect(getHomeScreenProps(store)).toStrictEqual(exceptedState)
  });

  it('action "setReleases" failed', () => {
    const releases: ReleasesResponse[] = []

    const exceptedState: HomeScreenProps = {
      ...HomeScreenInitialState,
      statusReleases: RepositoryStatus.FAILED,
      newReleases: releases
    };

    store.dispatch({
      type: HomeScreenActionConst.setReleases,
      status: RepositoryStatus.FAILED,
      releases: releases
    })

    expect(getHomeScreenProps(store)).toStrictEqual(exceptedState)
  });

  it("saga 'getNewReleases' success", () => {
    const releasesUri: ReleasesResponseUriType = {
      albums: {
        items: getReleases().map<ReleasesResponseUriContentType>(release => ({
          name: release.name,
          artists: [{name: release.artistName}],
          images: [{url: release.imageUri}]
        }))
      }
    }

    const releases = ReleasesResponse.uriContent(releasesUri)

    return expectSaga(HomeSaga.getNewReleases)
      .withReducer<HomeScreenProps | undefined>(getHomeReducerAnyAction())
      .provide([[call(ReleasesRepository.getReleases), {data: releasesUri}]])
      .put(HomeScreenAction.setReleases(RepositoryStatus.SUCCESS, releases))
      .hasFinalState({
        ...HomeScreenInitialState,
        statusReleases: RepositoryStatus.SUCCESS,
        newReleases: releases
      })
      .run();
  })

  it("saga 'getNewReleases' failed", () => {
    return expectSaga(HomeSaga.getNewReleases)
      .withReducer<HomeScreenProps | undefined>(getHomeReducerAnyAction())
      .provide([[call(ReleasesRepository.getReleases), undefined]])
      .put(HomeScreenAction.setReleases(RepositoryStatus.FAILED, []))
      .hasFinalState({
        ...HomeScreenInitialState,
        statusReleases: RepositoryStatus.FAILED,
        newReleases: []
      })
      .run();
  })
});
