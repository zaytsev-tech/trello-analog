import { FC, useState } from 'react';
import styled from 'styled-components';

import { useBoardContext } from '../../../context/board';
import { Card, selectColumnName } from '../../../store/board/index';
import { InputHeader } from '../../ui';
import { DeleteCard } from '../../ui/delete-card';

interface CardProp {
  columnKey: string;
  card: Card;
  close: () => void;
}

export const CardHeader: FC<CardProp> = ({ columnKey, card, close }) => {
  const [state] = useBoardContext();
  const [nameCard, setName] = useState(card.name);

  return (
    <Header>
      <Close onClick={close}>X</Close>
      <InputHeader
        columnKey={columnKey}
        card={card}
        nameCard={nameCard}
        setName={setName}
      />
      <Text>in column {selectColumnName(state, columnKey)}</Text>
      <DeleteCard columnKey={columnKey} cardKey={card.key} close={close} />
    </Header>
  );
};

const Header = styled.div`
  text-align: left;
  margin: ${(props) => props.theme.margin};
`;

const Text = styled.p`
  margin-top: 5px;
  font-size: 0.7em;
  color: gray;
`;

const Close = styled.span`
  position: absolute;
  display: block;
  text-align: right;
  margin: 0;
  margin-right: 10px;
  right: 0;
  ${({ theme: { buttons } }) => buttons.body.close};
`;
