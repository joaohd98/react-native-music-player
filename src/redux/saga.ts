import {watchSagaHome} from "../screens/home/redux/saga";
import { all } from '@redux-saga/core/effects'
import {call, spawn} from "redux-saga-test-plan/matchers";

export const ALL_SAGA = function* root() {
  const sagas = [
    watchSagaHome,
  ];

  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.log(e)
        }
      }
    }))
  );
};

