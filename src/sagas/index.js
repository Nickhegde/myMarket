import { takeEvery, takeLatest, all } from "redux-saga/effects";

import { LOGINTYPE, LOGOUTTYPE, REGISTERTYPE } from "actions/types";

import { login, logout, register } from "sagas/account";

export default function* rootSaga() {
  yield all([
    takeEvery(LOGINTYPE.LOGIN, login),
    takeEvery(REGISTERTYPE.REGISTER, register),
    takeEvery(LOGOUTTYPE.LOGOUT, logout),
  ]);
}
