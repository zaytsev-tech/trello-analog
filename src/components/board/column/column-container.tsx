import { FC } from 'react';
import styled from 'styled-components';

import { Column } from '../../store/board/index';
import { ColumnCardsList } from './column-cards-list';
import { ColumnFooter } from './column-footer';
import { ColumnHeader } from './column-header';

interface ColumnProps {
  nameColumn: Column;
}

export const ColumnContainer: FC<ColumnProps> = ({ nameColumn }) => {
  return (
    <ColumnContainerStyle>
      <ColumnHeader nameColumn={nameColumn.name} />
      <ColumnCardsList cardsProp={nameColumn.cards} />
      <ColumnFooter cards={nameColumn.cards} />
    </ColumnContainerStyle>
  );
};

export const ColumnContainerStyle = styled.div`
  margin: 15px;
  padding: 10px;
  background: lavender;
  width: 300px;
  max-width: 700px;
  border-radius: 5px;

  & h3 {
    margin: 0;
  }
`;
