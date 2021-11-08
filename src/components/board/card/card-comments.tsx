import { FC, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { useBoardContext } from '../../../context/board';
import { addNewComment, Card } from '../../../store/board/index';
import { cardTheme } from '../../../styles';

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
    <ThemeProvider theme={cardTheme}>
      <Container>
        <Title>Comments</Title>
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
    </ThemeProvider>
  );
};

const Container = styled.div`
  margin: ${(props) => props.theme.margin};
`;

const Title = styled.p`
  ${({ theme: { typography } }) => typography.body.title};
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
  width: 20px;
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
  ${({ theme: { typography } }) => typography.body.regular};
`;

const TextArea = styled.textarea`
  width: -webkit-fill-available !important;
  outline: none;
  border: none;
  overflow: auto;
  outline: none;
  resize: none;
  ${({ theme: { typography } }) => typography.body.regular};
  margin: 5px;
`;
