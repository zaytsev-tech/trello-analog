import { Dispatch } from 'react';

import { ActionTypes } from './action-types';

export interface Board {
  name: string;
  columns: Record<string, Column>;
}

interface Column {
  key: string;
  name: string;
  cards: Record<string, Card>;
}

export interface Card {
  key: string;
  author: string;
  description: string;
  comments: Record<string, Comment>;
  countComments: number;
}

interface Comment {
  key: string;
  author: string;
  text: string;
}

export type ActionCard =
  | { type: 'ADD_CARD'; item: Card }
  | { type: 'DELETE_CARD'; item: Card };

export type ActionUsername = { type: ActionTypes.setUsername; item: string };

export interface UserContextProps {
  state: Board;
  dispatch: Dispatch<ActionUsername>;
}
