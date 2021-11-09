import { FC } from 'react';
import styled from 'styled-components';

interface ButtonProp {
  className?: string;
  onClick?: () => void;
  onMouseDown?: () => void;
}

export const ButtonClose: FC<ButtonProp> = ({ className, onClick, onMouseDown }) => {
  return (
    <>
      {onMouseDown ? (
        <Close className={className} onMouseDown={onMouseDown}>
          X
        </Close>
      ) : (
        <Close className={className} onClick={onClick}>
          X
        </Close>
      )}
    </>
  );
};

export const ButtonSave: FC<ButtonProp> = ({ className, onClick }) => {
  return (
    <Save className={className} onClick={onClick}>
      Save
    </Save>
  );
};

const Close = styled.span`
  ${({ theme: { buttons } }) => buttons.body.close};
`;

const Save = styled.button`
  ${({ theme: { buttons } }) => buttons.body.save};
`;
