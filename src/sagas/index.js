import { takeEvery, takeLatest, all } from "redux-saga/effects";

import { LOGINTYPE, OTP, LOGOUTTYPE, REGISTERTYPE } from "actions/types";

import { login, sendOTP, logout, register } from "sagas/account";

export default function* rootSaga() {
  yield all([
    takeEvery(LOGINTYPE.LOGIN, login),
    takeEvery(OTP.SEND, sendOTP),
    takeEvery(REGISTERTYPE.REGISTER, register),
    takeEvery(LOGOUTTYPE.LOGOUT, logout),
  ]);
}
