import { FC } from 'react';
import styled from 'styled-components';

import { Button, ButtonProp } from '../button';

export const SaveButton: FC<ButtonProp> = ({
  className,
  onClick,
  onMouseDown,
  text = 'Save',
}) => {
  return (
    <Save
      text={text}
      className={Save + className}
      onMouseDown={onMouseDown}
      onClick={onClick}
    />
  );
};

const Save = styled(Button)`
  background: cornflowerblue;
  color: white;
  border: 1px solid #9f8dcb;
  border-radius: 3px;
`;
