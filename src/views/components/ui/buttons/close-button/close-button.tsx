import { FC } from 'react';
import styled from 'styled-components';

import { Button, ButtonProp } from '../button';

export const CloseButton: FC<ButtonProp> = ({
  className,
  onClick,
  onMouseDown,
  text = 'X',
}) => {
  return (
    <Close
      text={text}
      className={Close + className}
      onMouseDown={onMouseDown}
      onClick={onClick}
    />
  );
};

const Close = styled(Button)`
  cursor: pointer;
  font: caption;
  background: none;
  border: none;
`;
