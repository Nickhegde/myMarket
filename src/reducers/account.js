import { LOGINTYPE, OTP, USER, LOGOUTTYPE, REGISTERTYPE } from "actions/types";
import { INITIAL_STATE } from "./initialState";

export default (state = INITIAL_STATE.ACCOUNT, action) => {
  switch (action.type) {
    case LOGINTYPE.LOGIN_FAILED:
      return { ...state, loginErrorMessage: action.payload };
    case LOGINTYPE.LOGIN_SUCCEEDED:
      return { ...state, loginErrorMessage: "", userInfo: true };
    case LOGINTYPE.LOGIN_IN_PROGRESS:
      return { ...state, loginInprogress: action.payload };
    case OTP.FAILED:
      return { ...state, otpErrorMessage: action.payload };
    case OTP.SUCCEEDED:
      return { ...state, otpErrorMessage: "", otpSent: true };
    case USER.SET:
      return { ...state, user: action.payload };
    case USER.CLEAR:
      return { ...state, user: action.payload };
    case REGISTERTYPE.REGISTER_FAILED:
      return { ...state, registerErrorMessage: action.payload };
    case REGISTERTYPE.REGISTER_SUCCEEDED:
      return { ...state, registerErrorMessage: "", userInfo: true };
    case REGISTERTYPE.REGISTER_IN_PROGRESS:
      return { ...state, registerInprogress: action.payload };
    case LOGOUTTYPE.LOGOUT_FAILED:
      return { ...state, logoutErrorMessage: action.payload };
    case LOGOUTTYPE.LOGOUT_SUCCEEDED:
      return { ...state, logoutErrorMessage: "", userInfo: false };
    case LOGOUTTYPE.LOGOUT_IN_PROGRESS:
      return { ...state, logoutInprogress: action.payload };
    default:
      return state;
  }
};
