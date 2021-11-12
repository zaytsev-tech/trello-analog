import { v4 as uuidv4 } from 'uuid';

import { Board } from './types';

const colId = uuidv4();
const cardId = uuidv4();
const commId = uuidv4();

export const initialState = {
  name: '',
  columns: {
    [colId]: {
      key: colId,
      name: 'column-test',
      cards: {
        [cardId]: {
          key: cardId,
          name: 'card-name',
          author: 'card-author',
          description: 'card-desc',
          comments: {
            [commId]: {
              key: commId,
              author: 'comment-author',
              text: 'comment-text',
            },
          },
        },
      },
    },
  },
} as Board;
