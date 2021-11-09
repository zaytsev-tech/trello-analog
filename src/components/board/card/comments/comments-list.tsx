import { FC } from 'react';
import styled from 'styled-components';

import { Card } from '../../../../store/board';
import { CommentContainer } from './comment-container';

interface CommentListProp {
  card: Card;
}

export const CommentsList: FC<CommentListProp> = ({ card }) => {
  return (
    <List>
      {Object.values(card.comments).map((comment) => (
        <CommentContainer key={comment.key} comment={comment} />
      ))}
    </List>
  );
};

const List = styled.div`
  margin-top: 10px;
`;
