import { ChangeEvent, FC, useState } from 'react';

import { useBoardContext } from '../../../context/board';
import { Column, setHeaderColumnName } from '../../../store/board/index';

interface ColumnHeaderProps {
  column: Column;
}

export const ColumnHeader: FC<ColumnHeaderProps> = ({ column }) => {
  const [, dispatch] = useBoardContext();
  const [active, setActive] = useState(false);
  const [header, setHeader] = useState(column.name);

  const onBlurHeader = () => {
    if (header !== '') {
      setHeader(header);
      dispatch(setHeaderColumnName(column.key, header));
      setActive(false);
    } else {
      setHeader(column.name);
      setActive(false);
    }
  };

  const onChangeHeader = (e: ChangeEvent<HTMLInputElement>) => {
    setHeader(e.target.value);
  };

  return (
    <div>
      {!active ? (
        <h3 onClick={() => setActive(true)}>{header}</h3>
      ) : (
        <input value={header} autoFocus onChange={onChangeHeader} onBlur={onBlurHeader} />
      )}
    </div>
  );
};
