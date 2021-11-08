import { FC } from 'react';
import styled from 'styled-components';

import { Column } from '../../../store/board/index';
import { ColumnCard } from './column-card';

interface CardsProps {
  column: Column;
}

export const ColumnCardsList: FC<CardsProps> = ({ column }) => {
  return (
    <List>
      {Object.values(column.cards).map((card) => (
        <ColumnCard key={card.key} columnKey={column.key} card={card} />
      ))}
    </List>
  );
};

const List = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;
