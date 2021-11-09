import { ChangeEvent, Dispatch, FC, MouseEvent, SetStateAction, useState } from 'react';
import styled from 'styled-components';

import { useBoardContext } from '../../context/board';
import { addNewCard, Column } from '../../store/board';

interface InputProps {
  column: Column;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export const InputNameCard: FC<InputProps> = ({ column, active, setActive }) => {
  const [, dispatch] = useBoardContext();
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
  );
};

const Span = styled.span`
  ${({ theme: { buttons } }) => buttons.body.close};
`;

const Textarea = styled.textarea`
  width: -webkit-fill-available;
  margin-bottom: 5px;
`;

const Button = styled.button`
  margin-right: 5px;
`;
