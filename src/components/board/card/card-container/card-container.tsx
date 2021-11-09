import { FC } from 'react';
import styled from 'styled-components';

import { Modal } from '../../../../portal';
import { Card } from '../../../../store/board';
import { PopupBg } from '../../../user/user-form';
import { CardDescription } from '../card-description';
import { CardHeader } from '../card-header';
import { Comments } from '../comments';

interface CardProps {
  columnKey: string;
  card: Card;
  status: boolean;
  change: (val: boolean) => void;
}

export const CardContainer: FC<CardProps> = ({ columnKey, card, status, change }) => {
  const clickCheckoutPopup = () => {
    change(false);
  };
  return (
    <Modal>
      <PopupBg $active={status} onClick={clickCheckoutPopup}>
        <CardWindow onClick={(e) => e.stopPropagation()}>
          <CardHeader card={card} columnKey={columnKey} close={clickCheckoutPopup} />
          <CardDescription card={card} columnKey={columnKey} />
          <Comments card={card} columnKey={columnKey} />
        </CardWindow>
      </PopupBg>
    </Modal>
  );
};

const CardWindow = styled.div`
  display: block;
  position: absolute;
  border-radius: 12px;
  background-color: white;
  height: fit-content;
  width: 50vw;
  max-width: 600px;
  top: 25%;
  opacity: 1;
  transform: scale(1);
  overflow-y: auto;
`;
