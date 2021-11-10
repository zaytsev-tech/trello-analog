import {
  ActionTypes,
  AuthorTextPayload,
  BoardAction,
  ColumnKeyValue,
  DeleteCardPayload,
  DeleteCommentPayload,
  InputTextPayload,
  SaveCommentPayload,
} from './action-types';

export const setUsername = (payload: string): BoardAction => ({
  type: ActionTypes.setUsername,
  payload,
});

export const setHeaderColumnName = (payload: ColumnKeyValue): BoardAction => ({
  type: ActionTypes.setHeaderColumnName,
  payload,
});

export const addNewCard = (payload: ColumnKeyValue): BoardAction => ({
  type: ActionTypes.addNewCard,
  payload,
});

export const setNameCard = (payload: InputTextPayload): BoardAction => ({
  type: ActionTypes.setNameCard,
  payload,
});

export const setDescription = (payload: InputTextPayload): BoardAction => ({
  type: ActionTypes.setDescription,
  payload,
});

export const addNewComment = (payload: AuthorTextPayload): BoardAction => ({
  type: ActionTypes.addNewComment,
  payload,
});

export const deleteCard = (payload: DeleteCardPayload): BoardAction => ({
  type: ActionTypes.deleteCard,
  payload,
});

export const deleteComment = (payload: DeleteCommentPayload): BoardAction => ({
  type: ActionTypes.deleteComment,
  payload,
});

export const saveChangesComment = (payload: SaveCommentPayload): BoardAction => ({
  type: ActionTypes.saveChangesComment,
  payload,
});
