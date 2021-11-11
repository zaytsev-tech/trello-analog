import { configureStore } from '@reduxjs/toolkit';
import { FC, useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistProvider } from '../../store/board';
//import { BoardContext } from '../../context/board';

const { store, persistor } = persistProvider();

export const BoardProvider: FC = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
