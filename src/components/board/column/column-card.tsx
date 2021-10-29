import { FC } from 'react';
import styled from 'styled-components';

import { Card } from '../../store/board/index';

interface CardProps {
  card: Card;
}

export const ColumnCard: FC<CardProps> = ({ card }) => {
  return (
    <div>
      <div>{card.name}</div>
      <CountCommentsStyle>
        Count of comments: {Object.keys(card.comments).length}
      </CountCommentsStyle>
    </div>
  );
};

export const CountCommentsStyle = styled.div`
  margin-top: 10px;
  font-size: 12px;
`;
