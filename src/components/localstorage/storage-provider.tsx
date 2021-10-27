import { createContext, Dispatch, useEffect, useReducer, useState } from 'react';

import { InitializerUser, userStorageReducer } from './storage-reducer';

interface IContextProps {
  state: string;
  dispatch: Dispatch<any>;
}

const StorContext = createContext<IContextProps>({
  state: '',
  dispatch: () => {},
});

const StorProvider = ({ children }: any) => {
  const [username, setUser] = useState(InitializerUser());
  const [nameStorage, nameDispatch] = useReducer(userStorageReducer, username);

  useEffect(() => {
    localStorage.setItem('formdata', JSON.stringify(nameStorage));
  }, [nameStorage]);

  const valueStorContext: IContextProps = {
    state: nameStorage,
    dispatch: nameDispatch,
  };

  return <StorContext.Provider value={valueStorContext}>{children}</StorContext.Provider>;
};

export { StorContext, StorProvider };
