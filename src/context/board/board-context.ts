import { createContext } from 'react';

import { UserContextProps } from '../../components/store/board/index';
import { initialState } from '../../components/store/board/state';

export const StorContext = createContext<UserContextProps>([initialState, () => {}]);
