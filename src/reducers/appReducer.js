import { combineReducers } from "redux";
import accountReducer from "reducers/account";
import showLoaderReducer from "reducers/showLoader";

export default combineReducers({
  accountData: accountReducer,
  showLoader: showLoaderReducer,
});
