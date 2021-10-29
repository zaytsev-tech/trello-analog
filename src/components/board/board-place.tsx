import { useContext } from 'react';

import { StorContext } from '../context/login';
import { ColumnContainer } from './column/index';

function BoardPlace() {
  const { dispatch, state } = useContext(StorContext);
  return (
    <div>
      {Object.values(state.columns).map((column) => (
        <ColumnContainer key={column.key} nameColumn={column} />
      ))}
    </div>
  );
}

export default BoardPlace;
