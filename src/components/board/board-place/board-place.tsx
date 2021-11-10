import { useBoardContext } from '../../../context/board';
import { ColumnContainer } from '../column';

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
