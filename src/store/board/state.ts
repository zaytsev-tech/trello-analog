import { Board } from './types';

export const initialState = {
  name: '',
  columns: {
    '0': {
      key: '0',
      name: 'column-test',
      cards: {
        '0': {
          key: '0',
          name: 'card-name',
          author: 'card-author',
          description: 'card-desc',
          comments: {
            '0': {
              key: '0',
              author: 'comment-author',
              text: 'comment-text',
            },
          },
        },
      },
    },
  },
} as Board;
