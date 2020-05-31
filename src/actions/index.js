import { LOGINTYPE, REGISTERTYPE } from "./types";

export const loginUser = (dispatch, userInfo) => {
  dispatch({ type: LOGINTYPE.LOGIN, payload: userInfo });
};

export const registerUser = (dispatch, userInfo) => {
  dispatch({ type: REGISTERTYPE.REGISTER, payload: userInfo });
};
