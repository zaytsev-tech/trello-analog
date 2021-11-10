import { Dispatch } from 'react';

import { BoardAction } from './action-types';

export type UserContextProps = [Board, Dispatch<BoardAction>];

export interface Board {
  name: string;
  columns: Record<string, Column>;
}

export interface Column {
  key: string;
  name: string;
  cards: Record<string, Card>;
}

export interface Card {
  key: string;
  name: string;
  author: string;
  description: string;
  comments: Record<string, Comment>;
}

export interface Comment {
  key: string;
  author: string;
  text: string;
}

// export type ActionCard =
//   | { type: 'ADD_CARD'; item: Card }
//   | { type: 'DELETE_CARD'; item: Card };
