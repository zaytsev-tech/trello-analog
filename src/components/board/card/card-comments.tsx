import { FC, useContext, useState } from 'react';
import styled from 'styled-components';

import { StorContext } from '../../../context/board';
import { Card } from '../../store/board';
import { addNewComment } from '../../store/board/actions';

interface CardProp {
  columnKey: string;
  card: Card;
}

export const CardComments: FC<CardProp> = ({ columnKey, card }) => {
  const [state, dispatch] = useContext(StorContext);
  const [active, setActive] = useState(false);
  const [textComment, setTextComment] = useState('');

  const checkEmptyInput = () => {
    if (textComment === '') {
      setActive(false);
    }
  };

  const saveComment = () => {
    if (textComment !== '') {
      dispatch(
        addNewComment({
          author: state.name,
          columnId: columnKey,
          cardId: card.key,
          value: textComment,
        }),
      );
      setTextComment('');
      setActive(false);
    }
  };

  return (
    <CommentsContainer>
      <p>Comments</p>
      <BasicCommentBlock>
        <UserAvatar>{state.name.split('', 1)}</UserAvatar>
        <InputCommentBlock>
          {!active ? (
            <InputCommentP onClick={() => setActive(true)}>
              Write a comment...
            </InputCommentP>
          ) : (
            <>
              <InputCommentTA
                placeholder="Write a comment..."
                value={textComment}
                autoFocus
                onChange={(e) => setTextComment(e.target.value)}
                onBlur={checkEmptyInput}
              />
              <button onClick={saveComment}>Save</button>
            </>
          )}
        </InputCommentBlock>
      </BasicCommentBlock>
    </CommentsContainer>
  );
};

const CommentsContainer = styled.div`
  margin: 10px;
`;

const UserAvatar = styled.span`
  background: gainsboro;
  padding: 5px;
  position: relative;
  display: block;
  float: left;
  border-radius: 25em;
  font-weight: 600;
  text-align: center;
  width: 5%;
  top: 0;
`;

const BasicCommentBlock = styled.div`
  display: block;
  position: relative;
  height: 50px;
`;

const InputCommentBlock = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 5px;
  border: gainsboro 1px solid;
  border-radius: 5px;
  width: 90%;
  max-width: 400px;
`;

const InputCommentP = styled.p`
  margin: 5px;
  font-size: 0.9em;
`;

const InputCommentTA = styled.textarea`
  width: -webkit-fill-available !important;
  outline: none;
  border: none;
  overflow: auto;
  outline: none;
  resize: none;
  font-family: system-ui;
  font-size: 0.9em;
  margin: 5px;
`;
