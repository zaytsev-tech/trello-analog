import { createContext, useContext } from 'react';

import { UserContextProps } from '../../components/store/board/index';
import { initialState } from '../../components/store/board/state';

export const BoardContext = createContext<UserContextProps>([initialState, () => {}]);
export const useBoardContext = () => useContext(BoardContext);
