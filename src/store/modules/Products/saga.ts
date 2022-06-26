import { call, put, takeLatest } from "redux-saga/effects";
import { actions } from "./slice";
import * as service from "./services";

export function* fetchDataSaga() {
  try {
    const { data } = yield call(service.getData);
    yield put(actions.fetchDataSuccess(data));
  } catch (err) {
    yield put(actions.fetchDataFailed(err));
  } finally {
    yield put(actions.fetchDataFulfilled());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* productsSaga() {
  yield takeLatest(actions.fetchDataTrigger.type, fetchDataSaga);
}
