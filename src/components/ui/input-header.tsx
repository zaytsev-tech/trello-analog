import { Dispatch, FC, SetStateAction, useState } from 'react';
import styled from 'styled-components';

import { useBoardContext } from '../../context/board';
import { Card, setNameCard } from '../../store/board';

interface CardProp {
  columnKey: string;
  card: Card;
  nameCard: string;
  setName: Dispatch<SetStateAction<string>>;
}

export const InputHeader: FC<CardProp> = ({ columnKey, card, nameCard, setName }) => {
  const [, dispatch] = useBoardContext();
  const [active, setActive] = useState(false);

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
    <>
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
    </>
  );
};

const Title = styled.h3`
  ${({ theme: { typography } }) => typography.body.header};
`;

const Input = styled.input`
  font-size: 1.17em;
`;
