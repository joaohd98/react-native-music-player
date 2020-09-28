import {call, put, takeEvery} from '@redux-saga/core/effects'
import {HomeScreenAction} from "./action";
import {RepositoryStatus} from "../../../repositories/repository-status";
import {HomeScreenActionConst} from "./action-type";
import {ReleasesRepository} from "../../../repositories/releases";
import {ReleasesResponse} from "../../../repositories/releases/response";

function *getNewReleases() {
  try {
    const result = yield call(ReleasesRepository.getReleases);
    yield put(HomeScreenAction.setReleases(RepositoryStatus.SUCCESS, ReleasesResponse.uriContent(result)))
  }
  catch(error) {
    yield put(HomeScreenAction.setReleases(RepositoryStatus.FAILED, []))
  }
}

export const HomeScreenSaga = [
  takeEvery(HomeScreenActionConst.getReleases, getNewReleases)
];
