import { useSelector, useStore } from 'react-redux';
import getStoredState from 'redux-persist/lib/getStoredState';
import storage from 'redux-persist/lib/storage';

import { Board, Column, initialState } from '../../../store/board';
import { persistProvider } from '../../../store/persist';
import { ColumnContainer } from '../column';

function BoardPlace() {
  const store = getStoredState({ key: 'userStorage', storage }).then((response) => {
    return response;
  });
  return (
    <div>
      {Object.values(store.columns).map((column) => (
        <ColumnContainer key={column.key} column={column} />
      ))}
    </div>
  );
}

export default BoardPlace;
