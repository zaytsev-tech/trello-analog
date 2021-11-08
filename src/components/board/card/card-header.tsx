import { FC, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { useBoardContext } from '../../../context/board';
import { Card, selectColumnName, setNameCard } from '../../../store/board/index';
import { cardTheme } from '../../../styles';

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
    <ThemeProvider theme={cardTheme}>
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
    </ThemeProvider>
  );
};

const Header = styled.div`
  text-align: left;
  margin: ${(props) => props.theme.margin};
`;

const Title = styled.h3`
  ${({ theme: { typography } }) => typography.body.header};
`;

const Input = styled.input`
  font-size: 1.17em;
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
