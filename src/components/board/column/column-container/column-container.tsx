import { FC } from 'react';
import styled from 'styled-components';

import { Column } from '../../../../store/board';
import { ColumnCardsList } from '../column-cards-list';
import { ColumnFooter } from '../column-footer';
import { ColumnHeader } from '../column-header';

interface ColumnProps {
  column: Column;
}

export const ColumnContainer: FC<ColumnProps> = ({ column }) => {
  return (
    <Container>
      <ColumnHeader column={column} />
      <ColumnCardsList column={column} />
      <ColumnFooter column={column} />
    </Container>
  );
};

export const Container = styled.div`
  margin: 15px;
  padding: 10px;
  background: ${({ theme: { colors } }) => colors.column};
  width: 300px;
  max-width: 700px;
  border-radius: 5px;

  & h3 {
    margin: 0;
  }
`;
