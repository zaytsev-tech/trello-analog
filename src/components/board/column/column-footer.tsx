import { ChangeEvent, FC, MouseEvent, useState } from 'react';
import styled from 'styled-components';

import { useBoardContext } from '../../../context/board';
import { addNewCard, Column } from '../../../store/board/index';

interface ColumnFooterProps {
  column: Column;
}

export const ColumnFooter: FC<ColumnFooterProps> = ({ column }) => {
  const [, dispatch] = useBoardContext();
  const [active, setActive] = useState(false);
  const [text, setText] = useState('');

  const onBlurTextCard = () => {
    if (text !== '' && active !== false) {
      dispatch(addNewCard(column.key, text));
      setText('');
    }
    setActive(false);
  };

  const onChangeTextCard = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const onMouseDownClose = () => {
    setActive(false);
    setText('');
  };

  const addCard = (e: MouseEvent) => {
    text !== '' ? onBlurTextCard() : setActive(true);
    e.preventDefault();
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
            autoFocus
            onChange={onChangeTextCard}
            onBlur={onBlurTextCard}
          ></Textarea>
          <div>
            <Button onMouseDown={addCard}>+ Add card</Button>
            <Span onMouseDown={onMouseDownClose}>X</Span>
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

const Button = styled.button`
  margin-right: 5px;
`;

const Span = styled.span`
  cursor: pointer;
`;
