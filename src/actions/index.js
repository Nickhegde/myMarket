import { LOGINTYPE } from './types';

export const loginUser = (dispatch, userInfo) => {
  dispatch({ type: LOGINTYPE.LOGIN, payload: userInfo });
}