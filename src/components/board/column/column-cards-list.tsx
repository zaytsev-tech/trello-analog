import { FC } from 'react';
import styled from 'styled-components';

import { Card } from '../../store/board/index';
import { ColumnCard } from './column-card';

interface CardsProps {
  cardsProp: Record<string, Card>;
}

export const ColumnCardsList: FC<CardsProps> = ({ cardsProp }) => {
  return (
    <CardsListStyle>
      {Object.values(cardsProp).map((card) => (
        <ColumnCard key={card.key} card={card} />
      ))}
    </CardsListStyle>
  );
};

const CardsListStyle = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;
