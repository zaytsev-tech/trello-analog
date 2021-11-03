import { ActionTypes, BoardAction, InputTextPayload } from './action-types';

export const setUsername = (item: string): BoardAction => ({
  type: ActionTypes.setUsername,
  item,
});

export const setHeaderColumnName = (item: string, value: string): BoardAction => ({
  type: ActionTypes.setHeaderColumnName,
  item,
  value,
});

export const addNewCard = (item: string, value: string): BoardAction => ({
  type: ActionTypes.addNewCard,
  item,
  value,
});

export const setNameCard = (payload: InputTextPayload): BoardAction => ({
  type: ActionTypes.setNameCard,
  payload,
});

export const setDescription = (payload: InputTextPayload): BoardAction => ({
  type: ActionTypes.setDescription,
  payload,
});
