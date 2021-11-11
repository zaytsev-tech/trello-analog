import { FC } from 'react';
import { useDispatch } from 'react-redux';

//import { useBoardContext } from '../../../context/board';
import { deleteCard } from '../../../store/board';

interface DelCardProp {
  columnKey: string;
  cardKey: string;
  close: () => void;
}

export const DeleteCard: FC<DelCardProp> = ({ columnKey, cardKey, close }) => {
  const dispatch = useDispatch();

  const clickDelCard = () => {
    dispatch(deleteCard({ columnKey: columnKey, cardKey: cardKey }));
    close();
  };
  return <button onClick={clickDelCard}>Delete card</button>;
};
