import { createContext } from 'react';

import { UserContextProps } from '../../store/login/index';

export const StorContext = createContext<UserContextProps>({
  state: {
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
  },
  dispatch: () => {},
});
