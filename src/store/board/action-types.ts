export enum ActionTypes {
  setUsername = 'SET_USERNAME',
  setHeaderColumnName = 'SET_HEADER_COLUMN_NAME',
  addNewCard = 'ADD_NEW_CARD',
  setNameCard = 'SET_NAME_CARD',
  setDescription = 'SET_DESCRIPTION',
  addNewComment = 'ADD_NEW_COMMENT',
  deleteCard = 'DELETE_CARD',
}

export interface InputTextPayload {
  columnId: string;
  cardId: string;
  value: string;
}

export interface DeleteCardPayload {
  columnKey: string;
  cardKey: string;
}

export interface AuthorTextPayload {
  author: string;
  columnId: string;
  cardId: string;
  value: string;
}

export type BoardAction =
  | { type: ActionTypes.setUsername; item: string }
  | { type: ActionTypes.addNewCard; item: string; value: string }
  | { type: ActionTypes.setNameCard; payload: InputTextPayload }
  | { type: ActionTypes.setDescription; payload: InputTextPayload }
  | { type: ActionTypes.addNewComment; payload: AuthorTextPayload }
  | { type: ActionTypes.deleteCard; payload: DeleteCardPayload }
  | { type: ActionTypes.setHeaderColumnName; item: string; value: string };
