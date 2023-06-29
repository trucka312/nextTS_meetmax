// config saga
import { takeLatest, put, call } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { getUsersRequest, getUsersSuccess, getUsersFailure } from './actions';

function* getUsersSaga() : Generator<any, void, AxiosResponse> {
  try {
    const response: AxiosResponse = yield call(axios.get, 'https://api.example.com/users');
    yield put(getUsersSuccess(response.data));
  } catch (error) {
    yield put(getUsersFailure());
  }
}

export default function* rootSaga() {
  yield takeLatest(getUsersRequest, getUsersSaga);
}