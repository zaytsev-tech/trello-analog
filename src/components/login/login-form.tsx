import { FormEvent, useContext, useState } from 'react';
import styled from 'styled-components';

import { StorContext } from '../../context/board/index';
import { setUsername } from '../store/board/index';

function LoginForm() {
  const [state, dispatch] = useContext(StorContext);
  const [name, setName] = useState(state.name);
  const [active, setActive] = useState(true);

  function saveUsername(name: string) {
    dispatch(setUsername(name));
  }

  function onSubmitForm(event: FormEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (name != '') {
      saveUsername(name);
      setActive(false);
    } else {
      alert('Вы не ввели имя.');
    }
  }

  return (
    <PopupBg $active={active}>
      <LoginContainer>
        <LoginContainerForm onSubmit={onSubmitForm}>
          <div>
            <label>
              Ваше имя:
              <LoginFormInput
                type="text"
                name="login"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <LoginFormInput type="submit" value="Войти" />
          </div>
        </LoginContainerForm>
      </LoginContainer>
    </PopupBg>
  );
}

const LoginContainer = styled.div`
  display: block;
  position: relative;
  text-align: center;
  border-radius: 12px;
  background-color: white;
  height: 50%;
  width: 50vw;
  margin-top: 20px;
  opacity: 1;
  transform: scale(1);
  overflow-y: auto;
`;

const LoginContainerForm = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoginFormInput = styled.input`
  margin: 5px;
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

export default LoginForm;
