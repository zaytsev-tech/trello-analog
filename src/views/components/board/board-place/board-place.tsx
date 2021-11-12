import { useSelector } from 'react-redux';

import { ConfigState } from '../../../../store/persist';
import { ColumnContainer } from '../column';

function BoardPlace() {
  const state = useSelector((state: ConfigState) => state.board);
  return (
    <div>
      {Object.values(state.columns).map((column) => (
        <ColumnContainer key={column.key} column={column} />
      ))}
    </div>
  );
}

export default BoardPlace;
