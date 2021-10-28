import { Dispatch } from 'react';

import { ActionTypes } from './action-types';

export type Card = {
  key: string;
  author: string;
  nameColumn: string;
  description: string;
  comments: Comment[];
  countComments: number;
};

type Comment = {
  key: string;
  author: string;
  text: string;
};

export type ActionCard =
  | { type: 'ADD_CARD'; item: Card }
  | { type: 'DELETE_CARD'; item: Card };

export type ActionUsername = { type: ActionTypes.setUsername; item: string };

export interface UserContextProps {
  state: string;
  dispatch: Dispatch<ActionUsername>;
}

export interface CardsContextProps {
  state: Card[];
  dispatch: Dispatch<ActionCard>;
}
