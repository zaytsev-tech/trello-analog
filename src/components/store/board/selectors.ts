import { Board } from './types';

export const selectColumnName = (state: Board, uuid: string) => {
  for (const key in state.columns) {
    if (state.columns[key].key == uuid) {
      return state.columns[key].name;
    }
  }
};

export const selectTextDesc = (state: Board, colId: string, cardId: string) => {
  for (const key in state.columns) {
    if (state.columns[key].key == colId) {
      for (const card in state.columns[key].cards) {
        if (state.columns[key].cards[card].key == cardId)
          return state.columns[key].cards[card].description;
      }
    }
  }
};
