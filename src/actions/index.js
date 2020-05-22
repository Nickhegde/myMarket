import { LOGIN } from './types';

export const setLoginStatus = (dispatch, userInfo) => {
  dispatch({ type: LOGIN.SET_STATUS, payload: userInfo });
}