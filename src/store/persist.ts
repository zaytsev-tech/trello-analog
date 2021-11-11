import { configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';

import { userStorageSlice } from './board/reducers';

const persistConfig = {
  key: 'userStorage',
  storage,
};

const persistedReducer = persistReducer(persistConfig, userStorageSlice.reducer);

export const persistProvider = () => {
  const store = configureStore({ reducer: { persistedReducer } });
  const persistor = persistStore(store);
  return { store, persistor };
};
