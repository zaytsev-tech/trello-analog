import { createReducer, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { ActionTypes } from './action-types';
import { Initializer } from './init';
import { initialState } from './state';

export const userStorageSlice = createSlice({
  name: 'storage',
  initialState: initialState,
  reducers: {
    setUsername(state, action) {
      state.name = action.payload;
    },
    setHeaderColumnName(state, action) {
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
    },
    setDescription(state, action) {
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
    },
    deleteCard(state, action) {
      const newObj = Object.assign({}, state);
      delete newObj.columns[action.payload.columnKey].cards[action.payload.cardKey];
      return newObj;
    },
    deleteComment(state, action) {
      const newObj = Object.assign({}, state);
      delete newObj.columns[action.payload.columnKey].cards[action.payload.cardKey]
        .comments[action.payload.commentKey];
      return newObj;
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

// export const userStorageReducer = (state: Board, action: BoardAction): Board => {
//   switch (action.type) {
//     case ActionTypes.setUsername:
//       return { ...state, name: action.payload };

//     case ActionTypes.setHeaderColumnName:
//       return {
//         ...state,
//         columns: {
//           ...state.columns,
//           [action.payload.columnKey]: {
//             ...state.columns[action.payload.columnKey],
//             name: action.payload.value,
//           },
//         },
//       };

//     case ActionTypes.addNewCard: {
//       const newId = uuidv4();
//       return {
//         ...state,
//         columns: {
//           ...state.columns,
//           [action.payload.columnKey]: {
//             ...state.columns[action.payload.columnKey],
//             cards: {
//               ...state.columns[action.payload.columnKey].cards,
//               [newId]: {
//                 key: newId,
//                 name: action.payload.value,
//                 author: state.name,
//                 description: '',
//                 comments: {},
//               },
//             },
//           },
//         },
//       };
//     }

//     case ActionTypes.setNameCard:
//       return {
//         ...state,
//         columns: {
//           ...state.columns,
//           [action.payload.columnId]: {
//             ...state.columns[action.payload.columnId],
//             cards: {
//               ...state.columns[action.payload.columnId].cards,
//               [action.payload.cardId]: {
//                 ...state.columns[action.payload.columnId].cards[action.payload.cardId],
//                 name: action.payload.value,
//               },
//             },
//           },
//         },
//       };

//     case ActionTypes.setDescription:
//       return {
//         ...state,
//         columns: {
//           ...state.columns,
//           [action.payload.columnId]: {
//             ...state.columns[action.payload.columnId],
//             cards: {
//               ...state.columns[action.payload.columnId].cards,
//               [action.payload.cardId]: {
//                 ...state.columns[action.payload.columnId].cards[action.payload.cardId],
//                 description: action.payload.value,
//               },
//             },
//           },
//         },
//       };

//     case ActionTypes.addNewComment: {
//       const newId = uuidv4();
//       return {
//         ...state,
//         columns: {
//           ...state.columns,
//           [action.payload.columnId]: {
//             ...state.columns[action.payload.columnId],
//             cards: {
//               ...state.columns[action.payload.columnId].cards,
//               [action.payload.cardId]: {
//                 ...state.columns[action.payload.columnId].cards[action.payload.cardId],
//                 comments: {
//                   ...state.columns[action.payload.columnId].cards[action.payload.cardId]
//                     .comments,
//                   [newId]: {
//                     key: newId,
//                     author: action.payload.author,
//                     text: action.payload.value,
//                   },
//                 },
//               },
//             },
//           },
//         },
//       };
//     }

//     case ActionTypes.saveChangesComment:
//       return {
//         ...state,
//         columns: {
//           ...state.columns,
//           [action.payload.columnKey]: {
//             ...state.columns[action.payload.columnKey],
//             cards: {
//               ...state.columns[action.payload.columnKey].cards,
//               [action.payload.cardKey]: {
//                 ...state.columns[action.payload.columnKey].cards[action.payload.cardKey],
//                 comments: {
//                   ...state.columns[action.payload.columnKey].cards[action.payload.cardKey]
//                     .comments,
//                   [action.payload.commentKey]: {
//                     ...state.columns[action.payload.columnKey].cards[
//                       action.payload.cardKey
//                     ].comments[action.payload.commentKey],
//                     text: action.payload.value,
//                   },
//                 },
//               },
//             },
//           },
//         },
//       };

//     case ActionTypes.deleteCard: {
//       const newObj = Object.assign({}, state);
//       delete newObj.columns[action.payload.columnKey].cards[action.payload.cardKey];
//       return newObj;
//     }

//     case ActionTypes.deleteComment: {
//       const newObj = Object.assign({}, state);
//       delete newObj.columns[action.payload.columnKey].cards[action.payload.cardKey]
//         .comments[action.payload.commentKey];
//       return newObj;
//     }

//     default:
//       return state;
//   }
// };
