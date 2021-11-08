import { FC } from 'react';
import styled from 'styled-components';

import { Modal } from '../../../portal';
import { Card } from '../../../store/board';
import { PopupBg } from '../../user/user-form';
import { CardComments } from './card-comments';
import { CardDescription } from './card-description';
import { CardHeader } from './card-header';

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
          <CardComments card={card} columnKey={columnKey} />
        </CardWindow>
      </PopupBg>
    </Modal>
  );
};

const CardWindow = styled.div`
  display: block;
  position: relative;
  border-radius: 12px;
  background-color: white;
  height: 50%;
  width: 50vw;
  max-width: 600px;
  margin-top: 20px;
  opacity: 1;
  transform: scale(1);
  overflow-y: auto;
`;
