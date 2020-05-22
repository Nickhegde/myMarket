import axios from 'axios';
import { put, call } from 'redux-saga/effects';
import { LOGIN_URL, LOGOUT_URL } from 'configuration/api-urls';
import { LOGINTYPE, LOGOUTTYPE } from 'actions/types';

const loginApi = (params) => {
  return axios.post(LOGIN_URL, params);
};

const logoutApi = () => {
  return axios.get(LOGOUT_URL);
};

export const login = function* ({ payload: { username, password } }) {
  try {
    yield put({ type: LOGINTYPE.LOGIN_IN_PROGRESS, payload: true });
    const response = yield call(loginApi, { username, password });
    yield put({ type: LOGINTYPE.LOGIN_SUCCEEDED, payload: response.data });
  } catch (error) {
    yield put({ type: LOGINTYPE.LOGIN_FAILED, payload: error.message });
  } finally {
    yield put({ type: LOGINTYPE.LOGIN_IN_PROGRESS, payload: false });
  }
};

export const logout = function* () {
  try {
    yield put({ type: LOGOUTTYPE.LOGOUT_IN_PROGRESS, payload: true });
    yield call(logoutApi);
    yield put({ type: LOGOUTTYPE.LOGOUT_SUCCEEDED, payload: null });
  } catch (error) {
    yield put({ type: LOGOUTTYPE.LOGOUT_FAILED, payload: error.message });
  } finally {
    yield put({ type: LOGOUTTYPE.LOGOUT_IN_PROGRESS, payload: false });
  }
};