import { FC, useState } from 'react';
import styled from 'styled-components';

import { useBoardContext } from '../../../context/board';
import { Card, selectColumnName, setNameCard } from '../../../store/board/index';

interface CardProp {
  columnKey: string;
  card: Card;
  close: () => void;
}

export const CardHeader: FC<CardProp> = ({ columnKey, card, close }) => {
  const [state, dispatch] = useBoardContext();
  const [active, setActive] = useState(false);
  const [nameCard, setName] = useState(card.name);

  const onBlurHeader = () => {
    if (nameCard !== '') {
      const cardKey = card.key;
      dispatch(setNameCard({ columnId: columnKey, cardId: cardKey, value: nameCard }));
      setActive(false);
    } else {
      return;
    }
  };

  return (
    <Header>
      <Close onClick={close}>X</Close>
      {!active ? (
        <Title onClick={() => setActive(true)}>{nameCard}</Title>
      ) : (
        <Input
          value={nameCard}
          autoFocus
          onChange={(e) => setName(e.target.value)}
          onBlur={onBlurHeader}
        ></Input>
      )}
      <Text>in column {selectColumnName(state, columnKey)}</Text>
    </Header>
  );
};

const Header = styled.div`
  text-align: left;
  margin: 10px;
`;

const Title = styled.h3`
  margin: 0;
`;

const Input = styled.input`
  font-size: 1.17em;
`;

const Text = styled.p`
  margin-top: 5px;
  font-size: 0.7em;
  color: gray;
`;

const Close = styled.p`
  position: absolute;
  display: block;
  text-align: right;
  cursor: pointer;
  margin: 0;
  margin-right: 10px;
  right: 0;
`;
