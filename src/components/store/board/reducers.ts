import { v4 as uuidv4 } from 'uuid';

import { ActionTypes } from './action-types';
import { BoardAction } from './action-types';
import { Board } from './index';

export const userStorageReducer = (state: Board, action: BoardAction): Board => {
  switch (action.type) {
    case ActionTypes.setUsername:
      return { ...state, name: action.item };

    case ActionTypes.setHeaderColumnName:
      return {
        ...state,
        columns: {
          ...state.columns,
          [action.item]: { ...state.columns[action.item], name: action.value },
        },
      };

    case ActionTypes.addNewCard: {
      const newId = uuidv4();
      return {
        ...state,
        columns: {
          ...state.columns,
          [action.item]: {
            ...state.columns[action.item],
            cards: {
              ...state.columns[action.item].cards,
              [newId]: {
                key: newId,
                name: action.value,
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

    default:
      return state;
  }
};
