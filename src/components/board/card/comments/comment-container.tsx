import { FC, useState } from 'react';
import styled from 'styled-components';

import { useBoardContext } from '../../../../context/board';
import { Comment, deleteComment } from '../../../../store/board';
import { saveChangesComment } from '../../../../store/board/actions';
import { UserAvatar } from '../../../ui';
import { ButtonsCommentControl, InputCurrentComment } from '../../../use-case';

interface CommentProps {
  columnKey: string;
  cardKey: string;
  comment: Comment;
}

export const CommentContainer: FC<CommentProps> = ({ columnKey, cardKey, comment }) => {
  const [, dispatch] = useBoardContext();
  const [active, setActive] = useState(false);

  const onClickDelete = () => {
    dispatch(
      deleteComment({ columnKey: columnKey, cardKey: cardKey, commentKey: comment.key }),
    );
  };

  const onClickSave = (text: string) => {
    dispatch(
      saveChangesComment({
        columnKey: columnKey,
        cardKey: cardKey,
        commentKey: comment.key,
        value: text,
      }),
    );
    setActive(false);
  };

  return (
    <div>
      <UserAvatar text={comment.author.slice(0, 1)} />
      <Container>
        <InputCurrentComment
          comment={comment}
          active={active}
          onSave={onClickSave}
          onSetActive={setActive}
        />
        <ButtonsCommentControl
          active={active}
          onDelete={onClickDelete}
          onSetActive={setActive}
        />
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: grid;
  padding: 5px;
  padding-bottom: 10px;
  padding-top: 0;
  max-width: 410px;
`;
