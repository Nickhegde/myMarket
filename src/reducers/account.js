import { LOGINTYPE, LOGOUTTYPE } from 'actions/types';
import { INITIAL_STATE } from './initialState';

export default (state = INITIAL_STATE.ACCOUNT, action) => {
  switch (action.type) {
    case LOGINTYPE.LOGIN_FAILED:
      return { ...state, loginErrorMessage: action.payload };
    case LOGINTYPE.LOGIN_SUCCEEDED:
      return { ...state, loginErrorMessage: '', userInfo: true };
    case LOGINTYPE.LOGIN_IN_PROGRESS:
      return { ...state, loginInprogress: action.payload };
    case LOGOUTTYPE.LOGOUT_FAILED:
      return { ...state, logoutErrorMessage: action.payload };
    case LOGOUTTYPE.LOGOUT_SUCCEEDED:
      return { ...state, logoutErrorMessage: '', userInfo: false };
    case LOGOUTTYPE.LOGOUT_IN_PROGRESS:
      return { ...state, logoutInprogress: action.payload };
    default:
      return state;
  }
};