import { createContext, useContext } from 'react';

import { initialState, UserContextProps } from '../../store/board';

export const BoardContext = createContext<UserContextProps>([initialState, () => {}]);
export const useBoardContext = () => useContext(BoardContext);
