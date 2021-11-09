import { FC } from 'react';
import styled from 'styled-components';

import { Comment } from '../../store/board';

interface CurrentCommentProp {
  comment: Comment;
}

export const InputCurrentComment: FC<CurrentCommentProp> = ({ comment }) => {
  return (
    <Container>
      <p>{comment.author}</p>
      <p>{comment.text}</p>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  padding: 5px;
  padding-top: 10px;
  & p {
    margin: 5px;
  }
`;
