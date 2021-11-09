import { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';

interface ButtonControlsProp {
  active: boolean;
  onDelete: () => void;
  onSetActive: Dispatch<SetStateAction<boolean>>;
}

export const ButtonsCommentControl: FC<ButtonControlsProp> = ({
  active,
  onDelete,
  onSetActive,
}) => {
  return (
    <Container>
      {!active ? (
        <>
          <Button onClick={() => onSetActive(true)}>Edit</Button>
          <Button onClick={onDelete}>Delete</Button>
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};

const Container = styled.div`
  font-size: 10px;
  margin-left: 10px;
`;

const Button = styled.span`
  margin-right: 5px;
  cursor: pointer;
  &:hover {
    font-weight: 500;
  }
`;
