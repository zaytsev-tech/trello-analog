import { FC, useState } from 'react';
import styled from 'styled-components';

import { useBoardContext } from '../../../context/board';
import { Card } from '../../store/board';
import { setDescription } from '../../store/board/actions';
import { selectCardField } from '../../store/board/selectors';

interface CardProp {
  columnKey: string;
  card: Card;
}

export const CardDescription: FC<CardProp> = ({ columnKey, card }) => {
  const [state, dispatch] = useBoardContext();
  const [active, setActive] = useState(false);
  const [textDesc, setTextDesc] = useState(card.description);

  const innerText = () => {
    dispatch(setDescription({ columnId: columnKey, cardId: card.key, value: textDesc }));
    setActive(false);
  };

  const cancelInputChanges = () => {
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
    <DescriptionContainer>
      <DescriptionHeadP>Description</DescriptionHeadP>
      {!active ? (
        <>
          {textDesc != '' ? (
            <>
              <button onClick={() => setActive(true)}>Change</button>
              <div>
                <DescriptionContainerP onClick={() => setActive(true)}>
                  {textDesc}
                </DescriptionContainerP>
              </div>
            </>
          ) : (
            <EmptyDescription onClick={() => setActive(true)}>
              <EmptyDescriptionP>Add detailed description...</EmptyDescriptionP>
            </EmptyDescription>
          )}
        </>
      ) : (
        <div>
          <DescriptionContainerTA
            value={textDesc}
            autoFocus
            onChange={(e) => setTextDesc(e.target.value)}
            onBlur={innerText}
          ></DescriptionContainerTA>
          <ControllerTA>
            <ControllerButtonTA onClick={innerText}>Save</ControllerButtonTA>
            <ControllerCloseTA onMouseDown={cancelInputChanges}>X</ControllerCloseTA>
          </ControllerTA>
        </div>
      )}
    </DescriptionContainer>
  );
};

const DescriptionContainer = styled.div`
  margin: 10px;
`;

const DescriptionHeadP = styled.p`
  display: inline-block;
  margin-right: 5px;
  word-break: break-all;s
`;

const DescriptionContainerP = styled.p`
  word-break: break-all;
  cursor: pointer;
`;

const DescriptionContainerTA = styled.textarea`
  position: relative;
  max-width: 400px;
  width: 90%;
  height: 100px;
`;

const ControllerTA = styled.div`
  margin-top: 5px;
  display: flex;
`;

const ControllerButtonTA = styled.button`
  margin-right: 5px;
`;

const ControllerCloseTA = styled.span`
  align-self: center;
  cursor: pointer;
`;

const EmptyDescription = styled.div`
  background: gainsboro;
  padding: 10px;
  font-size: 0.8em;
  height: 50px;
  cursor: pointer;
  max-width: 400px;
`;

const EmptyDescriptionP = styled.p`
  margin: 0;
`;
