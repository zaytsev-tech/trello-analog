import { FC, useEffect, useReducer } from 'react';

import { BoardContext } from '../../context/board';
import { Initializer, initialState, userStorageReducer } from '../../store/board';

export const BoardProvider: FC = ({ children }) => {
  const stateDispatchStorage = useReducer(userStorageReducer, initialState, Initializer);
  const [state] = stateDispatchStorage;

  useEffect(() => {
    localStorage.setItem('storage', JSON.stringify(state));
  }, [state]);

  return (
    <BoardContext.Provider value={stateDispatchStorage}>{children}</BoardContext.Provider>
  );
};
