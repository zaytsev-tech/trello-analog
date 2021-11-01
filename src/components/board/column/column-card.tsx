import { FC } from 'react';
import styled from 'styled-components';

import { Card } from '../../store/board/index';

interface CardProps {
  card: Card;
}

export const ColumnCard: FC<CardProps> = ({ card }) => {
  return (
    <ColCard>
      <div>{card.name}</div>
      <CountCommentsStyle>
        Count of comments: {Object.keys(card.comments).length}
      </CountCommentsStyle>
    </ColCard>
  );
};

const CountCommentsStyle = styled.div`
  margin-top: 10px;
  font-size: 12px;
`;

const ColCard = styled.div`
  margin-bottom: 10px;
  padding: 5px;
  background: white;
  border: solid 1px lightgray;
  border-radius: 5px;
`;
