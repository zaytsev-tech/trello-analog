import { Dispatch } from 'react';

import { Board } from '../board';
import { ActionTypes } from './action-types';

export type ActionUsername = { type: ActionTypes.setUsername; item: string };

export interface UserContextProps {
  state: Board;
  dispatch: Dispatch<ActionUsername>;
}
