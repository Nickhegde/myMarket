import { LOGINTYPE, OTP, USER, REGISTERTYPE, LOGOUTTYPE } from "./types";

export const loginUser = (dispatch, userInfo) => {
  dispatch({ type: LOGINTYPE.LOGIN, payload: userInfo });
};

export const sendOtp = (dispatch, number) => {
  dispatch({ type: OTP.SEND, payload: number });
};

export const setUserDetails = (dispatch, user) => {
  dispatch({ type: USER.SET, payload: user })
}

export const clearUserDetails = (dispatch) => {
  dispatch({ type: USER.CLEAR });
}

export const registerUser = (dispatch, userInfo) => {
  dispatch({ type: REGISTERTYPE.REGISTER, payload: userInfo });
};

export const logoutUser = (dispatch) => {
  dispatch({ type: LOGOUTTYPE.LOGOUT });
};
