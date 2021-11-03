import { FC, useState } from 'react';
import styled from 'styled-components';

import { useBoardContext } from '../../../context/board';
import { Card, selectColumnName } from '../../store/board';
import { setNameCard } from '../../store/board/index';

interface CardProp {
  columnKey: string;
  card: Card;
  close: () => void;
}

export const CardHeader: FC<CardProp> = ({ columnKey, card, close }) => {
  const [state, dispatch] = useBoardContext();
  const [active, setActive] = useState(false);
  const [nameCard, setName] = useState(card.name);

  const innerHeader = () => {
    if (nameCard !== '') {
      const cardKey = card.key;
      dispatch(setNameCard({ columnId: columnKey, cardId: cardKey, value: nameCard }));
      setActive(false);
    } else {
      return;
    }
  };

  return (
    <HeaderContainer>
      <HeaderContainerClose onClick={close}>X</HeaderContainerClose>
      {!active ? (
        <HeaderContainerH3 onClick={() => setActive(true)}>{nameCard}</HeaderContainerH3>
      ) : (
        <HeaderContainerInput
          value={nameCard}
          autoFocus
          onChange={(e) => setName(e.target.value)}
          onBlur={innerHeader}
        ></HeaderContainerInput>
      )}
      <HeaderContainerP>in column {selectColumnName(state, columnKey)}</HeaderContainerP>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  text-align: left;
  margin: 10px;
`;

const HeaderContainerH3 = styled.h3`
  margin: 0;
`;

const HeaderContainerInput = styled.input`
  font-size: 1.17em;
`;

const HeaderContainerP = styled.p`
  margin-top: 5px;
  font-size: 0.7em;
  color: gray;
`;

const HeaderContainerClose = styled.p`
  position: absolute;
  display: block;
  text-align: right;
  cursor: pointer;
  margin: 0;
  margin-right: 10px;
  right: 0;
`;
