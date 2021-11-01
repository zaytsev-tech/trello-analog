import { ChangeEvent, FC, useContext, useState } from 'react';
import styled from 'styled-components';

import { StorContext } from '../../../context/board';
import { Card } from '../../store/board';

interface ColumnFooterProps {
  cards: Record<string, Card>;
}

export const ColumnFooter: FC<ColumnFooterProps> = ({ cards }) => {
  const [state, dispatch] = useContext(StorContext);
  const [active, setActive] = useState(false);
  const [text, setText] = useState('');

  const innerTextCard = () => {
    if (text !== '') {
      setActive(false);
    }
    setActive(false);
  };

  const changingTextCard = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      {!active ? (
        <Span onClick={() => setActive(true)}>+ Add card</Span>
      ) : (
        <div>
          <Textarea
            placeholder="Enter the header of card.."
            value={text}
            onChange={changingTextCard}
            onBlur={() => setActive(false)}
          ></Textarea>
          <div>
            <ButtonAdd>+ Add card</ButtonAdd>
            <Span onClick={() => setActive(false)}>X</Span>
          </div>
        </div>
      )}
    </div>
  );
};

const Textarea = styled.textarea`
  width: -webkit-fill-available;
  margin-bottom: 5px;
`;

const ButtonAdd = styled.button`
  margin-right: 5px;
`;

const Span = styled.span`
  cursor: pointer;
`;
