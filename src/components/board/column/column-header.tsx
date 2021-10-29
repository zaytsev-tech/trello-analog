import { FC, useState } from 'react';

interface ColumnHeaderProps {
  nameColumn: string;
}

export const ColumnHeader: FC<ColumnHeaderProps> = ({ nameColumn }) => {
  const [active, setActive] = useState(false);
  return (
    <div>
      {!active ? (
        <h3 onClick={() => setActive(true)}>{nameColumn}</h3>
      ) : (
        <input value={nameColumn} onBlur={() => setActive(false)} />
      )}
    </div>
  );
};
