export enum ActionTypes {
  setUsername = 'SET_USERNAME',
  setHeaderColumnName = 'SET_HEADER_COLUMN_NAME',
  addNewCard = 'ADDD_NEW_CARD',
}

export type BoardAction =
  | { type: ActionTypes.setUsername; item: string }
  | { type: ActionTypes.addNewCard; item: string }
  | { type: ActionTypes.setHeaderColumnName; item: string; value: string };
