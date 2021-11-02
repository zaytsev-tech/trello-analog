import { Board } from './types';

export const selectColumnName = (state: Board, uuid: string) => {
  for (const key in state.columns) {
    if (state.columns[key].key == uuid) {
      return state.columns[key].name;
    }
  }
};
