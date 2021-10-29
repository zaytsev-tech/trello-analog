import { FC, useEffect, useReducer } from 'react';

import { StorContext } from '../context/login/login-context';
import { InitializerUser, userStorageReducer } from './../store/login/index';

export const StorProvider: FC = ({ children }) => {
  const initialObj = {
    name: '',
    columns: {
      '0': {
        key: 'column-key',
        name: 'column-test',
        cards: {
          '0': {
            key: 'card-key',
            author: 'card-author',
            name: 'card',
            description: 'card-desc',
            comments: {
              '0': { key: 'comment-key', author: 'comment-author', text: 'comment-text' },
            },
          },
        },
      },
    },
  };
  const [objectStorage, objectDispatch] = useReducer(
    userStorageReducer,
    initialObj,
    InitializerUser,
  );

  useEffect(() => {
    localStorage.setItem('storage', JSON.stringify(objectStorage));
  }, [objectStorage]);

  return (
    <StorContext.Provider value={{ state: objectStorage, dispatch: objectDispatch }}>
      {children}
    </StorContext.Provider>
  );
};
