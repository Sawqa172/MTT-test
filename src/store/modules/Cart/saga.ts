import { put, takeLatest } from "redux-saga/effects";
import { actions } from "./slice";

//Cart
export function* setCartSaga(that) {
  try {
    yield put(actions.setCartItemSuccess(that.payload));
  } catch (err) {
    yield put(actions.setCartItemFailed(err));
  } finally {
    yield put(actions.setCartItemFulfilled());
    // yield
  }
}

//update Cart
export function* updateCartSaga(that) {
  try {
    yield put(actions.updateCartSuccess(that.payload));
  } catch (err) {
    yield put(actions.updateCartFailed(err));
  } finally {
    yield put(actions.updateCartFulfilled());
    // yield
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* cartSaga() {
  yield takeLatest(actions.setCartItemTrigger, setCartSaga);
  yield takeLatest(actions.updateCartTrigger, updateCartSaga);
}
