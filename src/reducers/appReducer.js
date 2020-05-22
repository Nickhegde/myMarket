import { combineReducers } from 'redux';
import accountReducer from 'reducers/account';

export default combineReducers({
  accountData: accountReducer
})