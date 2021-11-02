export enum ActionTypes {
  setUsername = 'SET_USERNAME',
  setHeaderColumnName = 'SET_HEADER_COLUMN_NAME',
  addNewCard = 'ADD_NEW_CARD',
  setNameCard = 'SET_NAME_CARD',
}

export type BoardAction =
  | { type: ActionTypes.setUsername; item: string }
  | { type: ActionTypes.addNewCard; item: string; value: string }
  | { type: ActionTypes.setNameCard; item: string; value: string }
  | { type: ActionTypes.setHeaderColumnName; item: string; value: string };
