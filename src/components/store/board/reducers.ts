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

    default:
      return state;
  }
};
