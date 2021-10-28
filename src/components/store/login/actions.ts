import { ActionTypes } from './action-types';

export const setUsername = (item: string) => ({
  type: ActionTypes.setUsername,
  item,
});
