import { FC } from 'react';
import styled from 'styled-components';

import { Card } from '../../../store/board/index';
import { InputNewComment } from '../../ui/index';

interface CardProp {
  columnKey: string;
  card: Card;
}

export const CardComments: FC<CardProp> = ({ columnKey, card }) => {
  return (
    <Container>
      <Title>Comments</Title>
      <InputNewComment columnKey={columnKey} card={card} />
    </Container>
  );
};

const Container = styled.div`
  margin: ${(props) => props.theme.margin};
`;

const Title = styled.p`
  ${({ theme: { typography } }) => typography.body.title};
`;
