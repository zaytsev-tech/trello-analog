import { FC, useEffect, useReducer } from 'react';

import { BoardContext } from '../../context/board/index';
import { userStorageReducer } from '../store/board/index';
import { Initializer } from '../store/board/init';
import { initialState } from '../store/board/state';

export const StorProvider: FC = ({ children }) => {
  const stateDispatchStorage = useReducer(userStorageReducer, initialState, Initializer);
  const [state] = stateDispatchStorage;

  useEffect(() => {
    localStorage.setItem('storage', JSON.stringify(state));
  }, [state]);

  return (
    <BoardContext.Provider value={stateDispatchStorage}>{children}</BoardContext.Provider>
  );
};
