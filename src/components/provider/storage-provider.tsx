import { FC, useEffect, useReducer, useState } from 'react';

import { StorContext } from '../context/login/login-context';
import { InitializerUser, userStorageReducer } from './../store/login/index';

export const StorProvider: FC = ({ children }) => {
  const [username, setUser] = useState(InitializerUser());
  //const [cards, setCards] = useState(InitializerCards());
  const [nameStorage, nameDispatch] = useReducer(
    userStorageReducer,
    username,
    InitializerUser,
  );
  //const [cardsStorage, cardsDispatch] = useReducer(cardStorageReducer, cards);

  useEffect(() => {
    localStorage.setItem('formdata', nameStorage);
  }, [nameStorage]);

  // useEffect(() => {
  //   localStorage.setItem('cards', JSON.stringify(cardsStorage));
  // }, [cardsStorage]);

  return (
    <StorContext.Provider value={{ state: nameStorage, dispatch: nameDispatch }}>
      {children}
    </StorContext.Provider>
  );
};
