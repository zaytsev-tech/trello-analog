import { ChangeEvent, FC, MouseEvent, useContext, useState } from 'react';
import styled from 'styled-components';

import { StorContext } from '../../../context/board';
import { Column } from '../../store/board';
import { addNewCard } from '../../store/board/actions';

interface ColumnFooterProps {
  column: Column;
}

export const ColumnFooter: FC<ColumnFooterProps> = ({ column }) => {
  const [, dispatch] = useContext(StorContext);
  const [active, setActive] = useState(false);
  const [text, setText] = useState('');

  const innerTextCard = () => {
    if (text !== '' && active !== false) {
      dispatch(addNewCard(column.key, text));
      setText('');
    }
    setActive(false);
  };

  const changingTextCard = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const closeInput = () => {
    setActive(false);
    setText('');
  };

  const buttonAddCard = (e: MouseEvent) => {
    text !== '' ? innerTextCard() : setActive(true);
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
            onChange={changingTextCard}
            onBlur={innerTextCard}
          ></Textarea>
          <div>
            <ButtonAdd onMouseDown={buttonAddCard}>+ Add card</ButtonAdd>
            <Span onMouseDown={closeInput}>X</Span>
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
