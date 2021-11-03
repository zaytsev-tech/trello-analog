import { FC } from 'react';
import styled from 'styled-components';

import { Modal } from '../../../portal';
import { PopupBg } from '../../login/login-form';
import { Card } from '../../store/board';
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
  const checkoutPopup = () => {
    change(false);
  };
  return (
    <Modal>
      <PopupBg $active={status} onClick={checkoutPopup}>
        <CardWindow onClick={(e) => e.stopPropagation()}>
          <CardHeader card={card} columnKey={columnKey} close={checkoutPopup} />
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
  margin-top: 20px;
  opacity: 1;
  transform: scale(1);
  overflow-y: auto;
`;
