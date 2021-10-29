import { createContext } from 'react';

import { UserContextProps } from '../../store/login/index';

export const StorContext = createContext<UserContextProps>({
  state: {
    name: '',
    columns: {
      '0': {
        key: 'column-key',
        name: 'column-test',
        cards: {
          '0': {
            key: 'card-key',
            name: 'card-name',
            author: 'card-author',
            description: 'card-desc',
            comments: {
              '0': { key: 'comment-key', author: 'comment-author', text: 'comment-text' },
            },
          },
        },
      },
    },
  },
  dispatch: () => {},
});
