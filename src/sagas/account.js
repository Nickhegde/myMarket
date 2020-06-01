import axios from "axios";
import { put, call } from "redux-saga/effects";
import {
  LOGIN_URL,
  OTP_URL,
  REGISTERAION_URL,
  LOGOUT_URL,
} from "configuration/api-urls";
import {
  LOGINTYPE,
  OTP,
  USER,
  REGISTERTYPE,
  LOGOUTTYPE,
  SHOW_LOADER,
} from "actions/types";

const loginApi = (params) => {
  return axios.post(LOGIN_URL, params);
};

const sendOtpApi = (params) => {
  return axios.post(OTP_URL, params);
}

const registerApi = (params) => {
  return axios.post(REGISTERAION_URL, params);
};

const logoutApi = () => {
  return axios.get(LOGOUT_URL);
};

export const login = function* ({ payload }) {
  try {
    yield put({ type: SHOW_LOADER, payload: true });
    yield put({ type: LOGINTYPE.LOGIN_IN_PROGRESS, payload: true });
    const response = yield call(loginApi, payload);
    yield put({ type: LOGINTYPE.LOGIN_SUCCEEDED, payload: response.data });
  } catch (error) {
    yield put({ type: LOGINTYPE.LOGIN_FAILED, payload: error.message });
  } finally {
    yield put({ type: LOGINTYPE.LOGIN_IN_PROGRESS, payload: false });
    yield put({ type: SHOW_LOADER, payload: false });
  }
};

export const sendOTP = function* ({ payload }) {
  try {
    yield put({ type: SHOW_LOADER, payload: true });
    const response = yield call(sendOtpApi, payload);
    yield put({ type: OTP.SUCCEEDED, payload: response.data });
  } catch (error) {
    yield put({ type: OTP.FAILED, payload: error.message });
  } finally {
    yield put({ type: SHOW_LOADER, payload: false });
  }
};

export const register = function* ({ payload }) {
  try {
    yield put({ type: SHOW_LOADER, payload: true });
    yield put({ type: REGISTERTYPE.REGISTER_IN_PROGRESS, payload: true });
    const response = yield call(registerApi, payload);
    yield put({
      type: REGISTERTYPE.REGISTER_SUCCEEDED,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: REGISTERTYPE.REGISTER_FAILED, payload: error.message });
  } finally {
    yield put({ type: REGISTERTYPE.REGISTER_IN_PROGRESS, payload: false });
    yield put({ type: SHOW_LOADER, payload: false });
  }
};

export const logout = function* () {
  try {
    yield put({ type: SHOW_LOADER, payload: true });
    yield put({ type: LOGOUTTYPE.LOGOUT_IN_PROGRESS, payload: true });
    yield call(logoutApi);
    yield put({ type: LOGOUTTYPE.LOGOUT_SUCCEEDED, payload: null });
  } catch (error) {
    yield put({ type: LOGOUTTYPE.LOGOUT_FAILED, payload: error.message });
  } finally {
    yield put({ type: LOGOUTTYPE.LOGOUT_IN_PROGRESS, payload: false });
    yield put({ type: SHOW_LOADER, payload: false });
  }
};
