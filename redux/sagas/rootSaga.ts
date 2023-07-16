import { all, call } from 'redux-saga/effects';
import watchAccount from './accountSaga';
import watcherCounter from './counterSaga';

export default function* rootSaga() {
  // Kết hợp nhiều watcher saga
  yield all([call(watchAccount), call(watcherCounter)]);
}
