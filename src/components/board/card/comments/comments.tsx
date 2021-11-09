import { FC } from 'react';
import styled from 'styled-components';

import { Card } from '../../../../store/board/index';
import { InputNewComment } from '../../../use-case/index';
import { CommentsList } from './comments-list';

interface CardProp {
  columnKey: string;
  card: Card;
}

export const Comments: FC<CardProp> = ({ columnKey, card }) => {
  return (
    <Container>
      <Title>Comments</Title>
      <InputNewComment columnKey={columnKey} card={card} />
      <CommentsList card={card} />
    </Container>
  );
};

const Container = styled.div`
  margin: ${(props) => props.theme.margin};
`;

const Title = styled.p`
  ${({ theme: { typography } }) => typography.body.title};
`;
