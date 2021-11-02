import { FC, useContext, useState } from 'react';

import { StorContext } from '../../../context/board';
import { Card, selectColumnName } from '../../store/board';
import { setNameCard } from '../../store/board/index';

interface CardProp {
  columnKey: string;
  card: Card;
}

export const CardHeader: FC<CardProp> = ({ columnKey, card }) => {
  const [state, dispatch] = useContext(StorContext);
  const [active, setActive] = useState(false);
  const [nameCard, setName] = useState(card.name);

  const innerHeader = () => {
    if (nameCard !== '') {
      dispatch(setNameCard(card.key, nameCard));
      setActive(false);
    } else {
      return;
    }
  };

  return (
    <div>
      {!active ? (
        <h3 onClick={() => setActive(true)}>{nameCard}</h3>
      ) : (
        <input
          value={nameCard}
          onChange={(e) => setName(e.target.value)}
          onBlur={innerHeader}
        ></input>
      )}
      <p>in column {selectColumnName(state, columnKey)}</p>
    </div>
  );
};
