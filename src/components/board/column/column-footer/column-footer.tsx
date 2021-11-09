import { FC, useState } from 'react';
import styled from 'styled-components';

import { Column } from '../../../../store/board';
import { InputNameCard } from '../../../use-case';

interface ColumnFooterProps {
  column: Column;
}

export const ColumnFooter: FC<ColumnFooterProps> = ({ column }) => {
  const [active, setActive] = useState(false);

  return (
    <div>
      {!active ? (
        <Span onClick={() => setActive(true)}>+ Add card</Span>
      ) : (
        <InputNameCard column={column} active={active} setActive={setActive} />
      )}
    </div>
  );
};

const Span = styled.span`
  cursor: pointer;
`;
