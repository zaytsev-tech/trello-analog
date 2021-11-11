import { ChangeEvent, Dispatch, FC, MouseEvent, SetStateAction, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { addNewCard, Column } from '../../../store/board';
import { CloseButton } from '../../ui';

interface InputProps {
  column: Column;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export const InputNameCard: FC<InputProps> = ({ column, active, setActive }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const onBlurTextCard = () => {
    if (text !== '' && active !== false) {
      dispatch(addNewCard({ columnKey: column.key, value: text }));
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
        <CloseButton onMouseDown={onMouseDownClose} />
      </div>
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
