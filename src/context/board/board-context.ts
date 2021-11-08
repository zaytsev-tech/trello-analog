import { createContext, useContext } from 'react';

import { initialState, UserContextProps } from '../../store/board/index';

export const BoardContext = createContext<UserContextProps>([initialState, () => {}]);
export const useBoardContext = () => useContext(BoardContext);
