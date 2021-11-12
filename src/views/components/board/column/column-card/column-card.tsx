import { FC, useState } from 'react';
import styled from 'styled-components';

import { Card } from '../../../../../store/board';
import { CardContainer } from '../../card';

interface CardProps {
  columnKey: string;
  card: Card;
}

export const ColumnCard: FC<CardProps> = ({ columnKey, card }) => {
  const [activePopup, setActivePopup] = useState(false);

  const updateStatusPopup = (val: boolean) => {
    setActivePopup(val);
  };

  return (
    <>
      <ColCard onClick={() => setActivePopup(true)}>
        <div>{card.name}</div>
        <CountComments>
          Count of comments: {Object.keys(card.comments).length}
        </CountComments>
      </ColCard>
      {activePopup && (
        <CardContainer
          columnKey={columnKey}
          card={card}
          status={activePopup}
          change={updateStatusPopup}
        />
      )}
    </>
  );
};

const CountComments = styled.div`
  margin-top: 10px;
  font-size: 12px;
`;

const ColCard = styled.div`
  margin-bottom: 10px;
  padding: 5px;
  background: white;
  border: solid 1px lightgray;
  border-radius: 5px;
  cursor: pointer;
`;
