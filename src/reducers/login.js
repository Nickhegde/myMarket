import { combineReducers } from 'redux';
import { LOGIN } from 'actions/types';
import { INITIAL_STATE } from './initialState';

const loginStatus = (state = INITIAL_STATE.LOGIN_STATE, action) => {
  const { type } = action;
  switch (type) {
    case LOGIN.SET_STATUS:
      return !state;
    default:
      return state;
  }
}

const loginReducer = combineReducers({
  loginStatus
});

export default loginReducer;