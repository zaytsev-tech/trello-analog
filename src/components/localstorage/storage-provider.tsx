import { createContext, Dispatch, useEffect, useReducer } from 'react';

import { Initializer, InitializerUser, storageReducer } from './storage-reducer';

interface IContextProps {
  state: string;
  dispatch: Dispatch<string>;
}

export const StorContext = createContext<IContextProps | null>(null);

export const StorProvider = ({ children }: any) => {
  //const [storage, dispatch] = useReducer(storageReducer, [], Initializer);
  const [nameStorage, nameDispatch] = useReducer(storageReducer, InitializerUser);
  //   useEffect(() => {
  //     localStorage.setItem('cards', JSON.stringify(storage));
  //   }, [storage]);

  useEffect(() => {
    localStorage.setItem('formdata', JSON.stringify(nameStorage));
  }, [nameStorage]);

  const valueStorContext: IContextProps = {
    state: nameStorage,
    dispatch: nameDispatch,
  };

  return <StorContext.Provider value={valueStorContext}>{children}</StorContext.Provider>;
};
