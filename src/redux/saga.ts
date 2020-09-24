import {HomeScreenSaga} from "../screens/home/redux/saga";
import { all } from '@redux-saga/core/effects'

export const ALL_SAGA = function* root() {
  yield all([...HomeScreenSaga]);
};
