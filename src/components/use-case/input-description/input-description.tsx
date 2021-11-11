import { FC, useState } from 'react';
import { useDispatch, useStore } from 'react-redux';
import styled from 'styled-components';

//import { useBoardContext } from '../../../context/board';
import { Card, selectCardField, setDescription } from '../../../store/board';
import { CloseButton, SaveButton } from '../../ui';

interface CardProp {
  columnKey: string;
  card: Card;
}

export const InputDescription: FC<CardProp> = ({ columnKey, card }) => {
  const dispatch = useDispatch();
  const store = useStore();
  const [active, setActive] = useState(false);
  const [textDesc, setTextDesc] = useState(card.description);

  const checkInnerText = () => {
    dispatch(setDescription({ columnId: columnKey, cardId: card.key, value: textDesc }));
    setActive(false);
  };

  const clickCancelChanges = () => {
    setTextDesc(
      selectCardField(
        store.getState(),
        { colId: columnKey, cardId: card.key },
        'description',
      ) as string,
    );
    setActive(false);
  };

  return (
    <>
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
            <SaveButton onClick={checkInnerText} />
            <Close className={Close} onMouseDown={clickCancelChanges} />
          </Controller>
        </div>
      )}
    </>
  );
};

const Text = styled.p`
  word-break: break-all;
  cursor: pointer;
  ${({ theme: { typography } }) => typography.body.regular};
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

const Close = styled(CloseButton)`
  margin-left: 5px;
  align-self: center;
  cursor: pointer;
`;

const EmptyDescription = styled.div`
  background: #efefef;
  padding: 10px;
  height: 50px;
  cursor: pointer;
  max-width: 400px;
  border-radius: 5px;
  ${({ theme: { typography } }) => typography.body.regular};
`;

const EmptyText = styled.p`
  margin: 0;
`;
