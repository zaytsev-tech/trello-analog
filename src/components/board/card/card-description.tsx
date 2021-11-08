import { FC, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { useBoardContext } from '../../../context/board';
import { Card, selectCardField, setDescription } from '../../../store/board/index';
import { cardTheme } from '../../../styles';

interface CardProp {
  columnKey: string;
  card: Card;
}

export const CardDescription: FC<CardProp> = ({ columnKey, card }) => {
  const [state, dispatch] = useBoardContext();
  const [active, setActive] = useState(false);
  const [textDesc, setTextDesc] = useState(card.description);

  const checkInnerText = () => {
    dispatch(setDescription({ columnId: columnKey, cardId: card.key, value: textDesc }));
    setActive(false);
  };

  const clickCancelChanges = () => {
    setTextDesc(
      selectCardField(
        state,
        { colId: columnKey, cardId: card.key },
        'description',
      ) as string,
    );
    setActive(false);
  };

  return (
    <ThemeProvider theme={cardTheme}>
      <Container>
        <Title>Description</Title>
        {!active ? (
          <>
            {textDesc != '' ? (
              <>
                <button onClick={() => setActive(true)}>Change</button>
                <div>
                  <Text onClick={() => setActive(true)}>{textDesc}</Text>
                </div>
              </>
            ) : (
              <EmptyDescription onClick={() => setActive(true)}>
                <EmptyText>Add detailed description...</EmptyText>
              </EmptyDescription>
            )}
          </>
        ) : (
          <div>
            <TextArea
              value={textDesc}
              autoFocus
              onChange={(e) => setTextDesc(e.target.value)}
              onBlur={checkInnerText}
            ></TextArea>
            <Controller>
              <button onClick={checkInnerText}>Save</button>
              <Close onMouseDown={clickCancelChanges}>X</Close>
            </Controller>
          </div>
        )}
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  margin: ${(props) => props.theme.margin};
`;

const Title = styled.p`
  ${({ theme: { typography } }) => typography.body.title};
`;

const Text = styled.p`
  word-break: break-all;
  cursor: pointer;
`;

const TextArea = styled.textarea`
  position: relative;
  max-width: 400px;
  width: 90%;
  height: 100px;
`;

const Controller = styled.div`
  margin-top: 5px;
  display: flex;
`;

const Close = styled.span`
  margin-left: 5px;
  align-self: center;
  cursor: pointer;
`;

const EmptyDescription = styled.div`
  background: gainsboro;
  padding: 10px;
  height: 50px;
  cursor: pointer;
  max-width: 400px;
  ${({ theme: { typography } }) => typography.body.regular};
`;

const EmptyText = styled.p`
  margin: 0;
`;
