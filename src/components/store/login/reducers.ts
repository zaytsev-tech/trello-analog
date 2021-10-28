import { ActionTypes } from './action-types';
import { ActionUsername } from './types';

export const userStorageReducer = (state: string, action: ActionUsername) => {
  switch (action.type) {
    case ActionTypes.setUsername:
      return action.item;

    default:
      return state;
  }
};
