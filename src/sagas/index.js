import { takeEvery, takeLatest, all } from 'redux-saga/effects';

import {
  LOGINTYPE,
  LOGOUTTYPE,
} from 'actions/types';

import { login, logout } from 'sagas/account';

export default function* rootSaga() {
  yield all([
    takeEvery(LOGINTYPE.LOGIN, login),
    takeEvery(LOGOUTTYPE.LOGOUT, logout),
  ]);
}