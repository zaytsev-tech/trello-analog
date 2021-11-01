import { ChangeEvent, FC, useContext, useState } from 'react';

import { StorContext } from '../../../context/board';
import { Column } from '../../store/board';
import { setHeaderColumnName } from '../../store/board/actions';

interface ColumnHeaderProps {
  column: Column;
}

export const ColumnHeader: FC<ColumnHeaderProps> = ({ column }) => {
  const [state, dispatch] = useContext(StorContext);
  const [active, setActive] = useState(false);
  const [header, setHeader] = useState(column.name);

  const innerHeader = () => {
    if (header !== '') {
      setHeader(header);
      dispatch(setHeaderColumnName(column.key, header));
      setActive(false);
    } else {
      setHeader(column.name);
      setActive(false);
    }
  };

  const changingHeader = (e: ChangeEvent<HTMLInputElement>) => {
    setHeader(e.target.value);
  };

  return (
    <div>
      {!active ? (
        <h3 onClick={() => setActive(true)}>{header}</h3>
      ) : (
        <input value={header} onChange={changingHeader} onBlur={innerHeader} />
      )}
    </div>
  );
};
