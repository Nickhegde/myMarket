import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from 'reducers';
import rootSaga from 'sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

store.subscribe(() => {
  store.getState();
});

sagaMiddleware.run(rootSaga);

export default store;