import { Dispatch, FC, SetStateAction, useState } from 'react';
import styled from 'styled-components';

import { Comment } from '../../../store/board';
import { CloseButton, SaveButton } from '../../ui';

interface CurrentCommentProp {
  comment: Comment;
  active: boolean;
  onSave: (text: string) => void;
  onSetActive: Dispatch<SetStateAction<boolean>>;
}

export const InputCurrentComment: FC<CurrentCommentProp> = ({
  comment,
  active,
  onSave,
  onSetActive,
}) => {
  const [text, setText] = useState(comment.text);

  const onClickClose = () => {
    setText(comment.text);
    onSetActive(false);
  };

  return (
    <>
      <Author>{comment.author}</Author>
      {!active ? (
        <Text>{text}</Text>
      ) : (
        <Input>
          <TextArea value={text} autoFocus onChange={(e) => setText(e.target.value)} />
          <Save className={Save} onClick={() => onSave(text)} />
          <CloseButton onClick={onClickClose} />
        </Input>
      )}
    </>
  );
};

const Author = styled.p`
  ${({ theme: { typography } }) => typography.body.regular};
  margin: 0;
  margin-left: 5px;
  font-weight: 500;
`;

const Save = styled(SaveButton)`
  margin: 5px;
`;

const Text = styled.p`
  margin: 5px;
  padding: 5px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
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

const Input = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 5px;
  border: gainsboro 1px solid;
  border-radius: 5px;
  width: 90%;
  max-width: 400px;
`;
