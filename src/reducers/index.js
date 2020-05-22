import appReducer from './appReducer';

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;