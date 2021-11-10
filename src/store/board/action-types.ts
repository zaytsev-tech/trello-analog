export enum ActionTypes {
  setUsername = 'BOARD/SET_USERNAME',
  setHeaderColumnName = 'BOARD/SET_HEADER_COLUMN_NAME',
  addNewCard = 'BOARD/ADD_NEW_CARD',
  setNameCard = 'BOARD/SET_NAME_CARD',
  setDescription = 'BOARD/SET_DESCRIPTION',
  addNewComment = 'BOARD/ADD_NEW_COMMENT',
  deleteCard = 'BOARD/DELETE_CARD',
  deleteComment = 'BOARD/DELETE_COMMENT',
  saveChangesComment = 'BOARD/SAVE_CHANGES_COMMENT',
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

export interface DeleteCommentPayload {
  columnKey: string;
  cardKey: string;
  commentKey: string;
}

export interface DeleteCommentPayload {
  columnKey: string;
  cardKey: string;
  commentKey: string;
}

export interface SaveCommentPayload {
  columnKey: string;
  cardKey: string;
  commentKey: string;
  value: string;
}

export interface AuthorTextPayload {
  author: string;
  columnId: string;
  cardId: string;
  value: string;
}

export interface ColumnKeyValue {
  columnKey: string;
  value: string;
}

export type BoardAction =
  | { type: ActionTypes.setUsername; payload: string }
  | { type: ActionTypes.addNewCard; payload: ColumnKeyValue }
  | { type: ActionTypes.setNameCard; payload: InputTextPayload }
  | { type: ActionTypes.setDescription; payload: InputTextPayload }
  | { type: ActionTypes.addNewComment; payload: AuthorTextPayload }
  | { type: ActionTypes.deleteCard; payload: DeleteCardPayload }
  | { type: ActionTypes.deleteComment; payload: DeleteCommentPayload }
  | { type: ActionTypes.saveChangesComment; payload: SaveCommentPayload }
  | { type: ActionTypes.setHeaderColumnName; payload: ColumnKeyValue };
