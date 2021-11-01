import { ActionTypes, BoardAction } from './action-types';

export const setUsername = (item: string): BoardAction => ({
  type: ActionTypes.setUsername,
  item,
});

export const setHeaderColumnName = (item: string, value: string): BoardAction => ({
  type: ActionTypes.setHeaderColumnName,
  item,
  value,
});

export const addNewCard = (item: string): BoardAction => ({
  type: ActionTypes.addNewCard,
  item,
});
