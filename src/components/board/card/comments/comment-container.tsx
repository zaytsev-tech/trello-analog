import { FC } from 'react';
import styled from 'styled-components';

import { Comment } from '../../../../store/board/index';
import { InputCurrentComment } from '../../../use-case';

interface CommentProps {
  comment: Comment;
}

export const CommentContainer: FC<CommentProps> = ({ comment }) => {
  return (
    <div>
      <UserAvatar>{comment.author.slice(0, 1)}</UserAvatar>
      <InputCurrentComment comment={comment} />
    </div>
  );
};

const UserAvatar = styled.div`
  ${({ theme: { avatar } }) => avatar.body.main};
`;
