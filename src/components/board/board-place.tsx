import { useBoardContext } from '../../context/board/index';
import { ColumnContainer } from './column/index';

function BoardPlace() {
  const [state] = useBoardContext();
  return (
    <div>
      {Object.values(state.columns).map((column) => (
        <ColumnContainer key={column.key} column={column} />
      ))}
    </div>
  );
}

export default BoardPlace;
