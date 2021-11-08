import { FC, useState } from 'react';
import styled from 'styled-components';

import { useBoardContext } from '../../../context/board';
import { addNewComment, Card } from '../../../store/board/index';

interface CardProp {
  columnKey: string;
  card: Card;
}

export const CardComments: FC<CardProp> = ({ columnKey, card }) => {
  const [state, dispatch] = useBoardContext();
  const [active, setActive] = useState(false);
  const [textComment, setTextComment] = useState('');

  const blurCheckInput = () => {
    if (textComment === '') {
      setActive(false);
    }
  };

  const clickSaveComment = () => {
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
    <Container>
      <p>Comments</p>
      <Block>
        <UserAvatar>{state.name.split('', 1)}</UserAvatar>
        <Input>
          {!active ? (
            <Text onClick={() => setActive(true)}>Write a comment...</Text>
          ) : (
            <>
              <TextArea
                placeholder="Write a comment..."
                value={textComment}
                autoFocus
                onChange={(e) => setTextComment(e.target.value)}
                onBlur={blurCheckInput}
              />
              <button onClick={clickSaveComment}>Save</button>
            </>
          )}
        </Input>
      </Block>
    </Container>
  );
};

const Container = styled.div`
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

const Block = styled.div`
  display: block;
  position: relative;
  height: 50px;
`;

const Input = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 5px;
  border: gainsboro 1px solid;
  border-radius: 5px;
  width: 90%;
  max-width: 400px;
`;

const Text = styled.p`
  margin: 5px;
  font-size: 0.9em;
`;

const TextArea = styled.textarea`
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
