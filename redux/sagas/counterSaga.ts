import { all, call, put, takeEvery } from 'redux-saga/effects';
import { decrement, increment } from '../actions/counterAction';

function* workerIncrement() {
  yield put(increment());
}
function* workerDecrement() {
  yield put(decrement());
}

export default function* watcherCounter() {
  yield takeEvery('increment_counter', workerIncrement);
  yield takeEvery('decrement_counter', workerDecrement);
}
