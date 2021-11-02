import { FC } from 'react';

import { Card } from '../../store/board';

interface CardProp {
  card: Card;
}

export const CardHeader: FC<CardProp> = ({ card }) => {
  return (
    <div>
      <h3>{card.name}</h3>
    </div>
  );
};
