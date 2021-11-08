import { FC, useState } from 'react';

import { Column } from '../../../store/board/index';
import { InputNameCard } from '../../ui/index';

interface ColumnFooterProps {
  column: Column;
}

export const ColumnFooter: FC<ColumnFooterProps> = ({ column }) => {
  const [active, setActive] = useState(false);

  return (
    <div>
      {!active ? (
        <span onClick={() => setActive(true)}>+ Add card</span>
      ) : (
        <InputNameCard column={column} active={active} setActive={setActive} />
      )}
    </div>
  );
};
