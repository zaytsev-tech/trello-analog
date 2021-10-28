import { createContext } from 'react';

import { UserContextProps } from '../../store/login';

export const StorContext = createContext<UserContextProps>({
  state: '',
  dispatch: () => {},
});
