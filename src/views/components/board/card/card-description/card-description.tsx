import { FC } from 'react';
import styled from 'styled-components';

import { Card } from '../../../../../store/board';
import { InputDescription } from '../../../use-case';

interface CardProp {
  columnKey: string;
  card: Card;
}

export const CardDescription: FC<CardProp> = ({ columnKey, card }) => {
  return (
    <Container>
      <Title>Description</Title>
      <InputDescription columnKey={columnKey} card={card} />
    </Container>
  );
};

const Container = styled.div`
  margin: ${(props) => props.theme.margin};
`;

const Title = styled.p`
  ${({ theme: { typography } }) => typography.body.title};
`;
