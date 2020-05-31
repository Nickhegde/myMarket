import { SHOW_LOADER } from "actions/types";
import { INITIAL_STATE } from "./initialState";

export default (state = INITIAL_STATE.SHOW_LOADER, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return action.payload;
    default:
      return state;
  }
};
