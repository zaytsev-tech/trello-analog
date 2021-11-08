import { Board, Card } from './types';

export const selectColumnName = (state: Board, uuid: string) => {
  for (const key in state.columns) {
    if (state.columns[key].key == uuid) {
      return state.columns[key].name;
    }
  }
};

export const selectCardField = (
  state: Board,
  { colId, cardId }: { colId: string; cardId: string },
  field: keyof Card,
) => state.columns?.[colId]?.cards?.[cardId]?.[field];
