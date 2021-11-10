import { v4 as uuidv4 } from 'uuid';

import { ActionTypes } from './action-types';
import { BoardAction } from './action-types';
import { Board } from './types';

export const userStorageReducer = (state: Board, action: BoardAction): Board => {
  switch (action.type) {
    case ActionTypes.setUsername:
      return { ...state, name: action.payload };

    case ActionTypes.setHeaderColumnName:
      return {
        ...state,
        columns: {
          ...state.columns,
          [action.payload.columnKey]: {
            ...state.columns[action.payload.columnKey],
            name: action.payload.value,
          },
        },
      };

    case ActionTypes.addNewCard: {
      const newId = uuidv4();
      return {
        ...state,
        columns: {
          ...state.columns,
          [action.payload.columnKey]: {
            ...state.columns[action.payload.columnKey],
            cards: {
              ...state.columns[action.payload.columnKey].cards,
              [newId]: {
                key: newId,
                name: action.payload.value,
                author: state.name,
                description: '',
                comments: {},
              },
            },
          },
        },
      };
    }

    case ActionTypes.setNameCard:
      return {
        ...state,
        columns: {
          ...state.columns,
          [action.payload.columnId]: {
            ...state.columns[action.payload.columnId],
            cards: {
              ...state.columns[action.payload.columnId].cards,
              [action.payload.cardId]: {
                ...state.columns[action.payload.columnId].cards[action.payload.cardId],
                name: action.payload.value,
              },
            },
          },
        },
      };

    case ActionTypes.setDescription:
      return {
        ...state,
        columns: {
          ...state.columns,
          [action.payload.columnId]: {
            ...state.columns[action.payload.columnId],
            cards: {
              ...state.columns[action.payload.columnId].cards,
              [action.payload.cardId]: {
                ...state.columns[action.payload.columnId].cards[action.payload.cardId],
                description: action.payload.value,
              },
            },
          },
        },
      };

    case ActionTypes.addNewComment: {
      const newId = uuidv4();
      return {
        ...state,
        columns: {
          ...state.columns,
          [action.payload.columnId]: {
            ...state.columns[action.payload.columnId],
            cards: {
              ...state.columns[action.payload.columnId].cards,
              [action.payload.cardId]: {
                ...state.columns[action.payload.columnId].cards[action.payload.cardId],
                comments: {
                  ...state.columns[action.payload.columnId].cards[action.payload.cardId]
                    .comments,
                  [newId]: {
                    key: newId,
                    author: action.payload.author,
                    text: action.payload.value,
                  },
                },
              },
            },
          },
        },
      };
    }

    case ActionTypes.saveChangesComment:
      return {
        ...state,
        columns: {
          ...state.columns,
          [action.payload.columnKey]: {
            ...state.columns[action.payload.columnKey],
            cards: {
              ...state.columns[action.payload.columnKey].cards,
              [action.payload.cardKey]: {
                ...state.columns[action.payload.columnKey].cards[action.payload.cardKey],
                comments: {
                  ...state.columns[action.payload.columnKey].cards[action.payload.cardKey]
                    .comments,
                  [action.payload.commentKey]: {
                    ...state.columns[action.payload.columnKey].cards[
                      action.payload.cardKey
                    ].comments[action.payload.commentKey],
                    text: action.payload.value,
                  },
                },
              },
            },
          },
        },
      };

    case ActionTypes.deleteCard: {
      const newObj = Object.assign({}, state);
      delete newObj.columns[action.payload.columnKey].cards[action.payload.cardKey];
      return newObj;
    }

    case ActionTypes.deleteComment: {
      const newObj = Object.assign({}, state);
      delete newObj.columns[action.payload.columnKey].cards[action.payload.cardKey]
        .comments[action.payload.commentKey];
      return newObj;
    }

    default:
      return state;
  }
};
