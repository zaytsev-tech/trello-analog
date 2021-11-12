import { FC } from 'react';
import styled from 'styled-components';

import { Card } from '../../../../../store/board';
import { CommentContainer } from './comment-container';

interface CommentListProp {
  columnKey: string;
  card: Card;
}

export const CommentsList: FC<CommentListProp> = ({ columnKey, card }) => {
  return (
    <List>
      {Object.values(card.comments)
        .reverse()
        .map((comment) => (
          <CommentContainer
            key={comment.key}
            columnKey={columnKey}
            cardKey={card.key}
            comment={comment}
          />
        ))}
    </List>
  );
};

const List = styled.div`
  margin-top: 10px;
`;
