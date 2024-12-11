import {persistStore, persistReducer} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';
import {enableBatching} from 'redux-batched-actions';
import {createLogger} from 'redux-logger';
import {whiteList} from '../config/ReduxStorage';
import {RootReducer, RootSaga} from '../ducks';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';

// check if chrome debugger is on
const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

// init logger
const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
});

export default function configureAppStore(onComplete) {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  // create list of middleware
  const middlewareList = [sagaMiddleware];
  if (__DEV__) {
    // if dev push logger middle ware
    middlewareList.push(logger);
  }

  // init persist config - set which reducers to save
  const persistConfig = {
    key: 'root',
    storage,
    whitelist: whiteList,
    stateReconciler: autoMergeLevel2,
  };

  // init redux persist reducer
  const persistedReducer = persistReducer(persistConfig, RootReducer);

  // create store with enable batching
  const store = configureStore({
    reducer: enableBatching(persistedReducer),
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(sagaMiddleware, logger),
  });

  // set store in window
  if (isDebuggingInChrome) {
    window.store = store;
  }

  // init store with redux persist
  persistStore(store, null, () => onComplete(store));

  // then run the saga
  sagaMiddleware.run(RootSaga);
}
