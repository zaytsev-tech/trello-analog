import { ActionTypes } from './action-types';
import { Board } from './types';
import { ActionUsername } from './types';

export const userStorageReducer = (state: Board, action: ActionUsername) => {
  switch (action.type) {
    case ActionTypes.setUsername:
      return { ...state, name: action.item };

    default:
      return state;
  }
};
