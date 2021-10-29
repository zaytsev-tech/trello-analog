import { FC, useEffect, useReducer } from 'react';

import { StorContext } from '../context/login/login-context';
import { InitializerUser, userStorageReducer } from './../store/login/index';

export const StorProvider: FC = ({ children }) => {
  const initialUsername = {
    name: '',
    columns: {
      0: {
        key: '',
        name: '',
        cards: {
          0: {
            key: '',
            author: '',
            description: '',
            comments: { 0: { key: '', author: '', text: '' } },
            countComments: 0,
          },
        },
      },
    },
  };
  const [nameStorage, nameDispatch] = useReducer(
    userStorageReducer,
    initialUsername,
    InitializerUser,
  );

  useEffect(() => {
    localStorage.setItem('storage', JSON.stringify(nameStorage));
  }, [nameStorage]);

  return (
    <StorContext.Provider value={{ state: nameStorage, dispatch: nameDispatch }}>
      {children}
    </StorContext.Provider>
  );
};
