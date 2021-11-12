import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { initialState } from './state';

export const userStorageSlice = createSlice({
  name: 'storage',
  initialState: initialState,
  reducers: {
    setUsername(state, action) {
      state.name = action.payload;
    },
    setHeaderColumnName(state, action) {
      state.columns[action.payload.columnKey].name = action.payload.value;
    },
    addNewCard(state, action) {
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
    },
    setNameCard(state, action) {
      state.columns[action.payload.columnId].cards[action.payload.cardId].name =
        action.payload.value;
    },
    setDescription(state, action) {
      state.columns[action.payload.columnId].cards[action.payload.cardId].description =
        action.payload.value;
    },
    addNewComment(state, action) {
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
    },
    saveChangesComment(state, action) {
      state.columns[action.payload.columnKey].cards[action.payload.cardKey].comments[
        action.payload.commentKey
      ].text = action.payload.value;
    },
    deleteCard(state, action) {
      delete state.columns[action.payload.columnKey].cards[action.payload.cardKey];
    },
    deleteComment(state, action) {
      delete state.columns[action.payload.columnKey].cards[action.payload.cardKey]
        .comments[action.payload.commentKey];
    },
  },
});

export const {
  setUsername,
  setHeaderColumnName,
  addNewCard,
  setNameCard,
  setDescription,
  addNewComment,
  saveChangesComment,
  deleteCard,
  deleteComment,
} = userStorageSlice.actions;
