import { useState } from 'react';
import styled from 'styled-components';

import { UserNameForm } from '../ui';

function UserForm() {
  const [active, setActive] = useState(true);

  return (
    <PopupBg $active={active}>
      <LoginContainer>
        <UserNameForm setActive={setActive} />
      </LoginContainer>
    </PopupBg>
  );
}

const LoginContainer = styled.div`
  display: block;
  position: relative;
  border-radius: 12px;
  background-color: white;
  height: 50%;
  width: 50vw;
  max-width: 400px;
  max-height: 250px;
  margin-top: 20px;
  opacity: 1;
  transform: scale(1);
  overflow-y: auto;
`;

export const PopupBg = styled('div')<{ $active: boolean }>`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.$active ? `1` : `0`)};
  transition: 0.5s;
  overflow-y: auto;
  pointer-events: ${(props) => (props.$active ? `all` : `none`)};
`;

export default UserForm;
