import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';

import { Board } from '../board';
import { userStorageSlice } from '../board/reducers';

const persistConfig = {
  key: 'userStorage',
  storage,
};

const rootReducer = combineReducers({
  board: userStorageSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const persistProvider = () => {
  const store = configureStore({ reducer: persistedReducer });
  const persistor = persistStore(store);
  return { store, persistor };
};

export interface ConfigState {
  board: Board;
}
