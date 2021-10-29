import { FC } from 'react';

import { Card } from '../../store/board';

interface ColumnFooterProps {
  cards: Record<string, Card>;
}

export const ColumnFooter: FC<ColumnFooterProps> = ({ cards }) => {
  return (
    <div>
      <button>+ Add card</button>
    </div>
  );
};
