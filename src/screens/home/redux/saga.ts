import {call, put, takeEvery} from '@redux-saga/core/effects'
import {NewReleasesRepository} from "../../../repositories/new-releases";
import {NewReleasesResponse} from "../../../repositories/new-releases/response";
import {HomeScreenAction} from "./action";
import {RepositoryStatus} from "../../../repositories/repository-status";
import {HomeScreenActionConst} from "./action-type";

function *getNewReleases() {
  try {
    const result = yield call(NewReleasesRepository.getNewsReleases);
    yield put(HomeScreenAction.setNewReleases(RepositoryStatus.SUCCESS, NewReleasesResponse.uriContent(result)))
  }
  catch(error) {
    yield put(HomeScreenAction.setNewReleases(RepositoryStatus.FAILED, []))
  }
}

export const HomeScreenSaga = [
  takeEvery(HomeScreenActionConst.getNewReleases, getNewReleases)
];
