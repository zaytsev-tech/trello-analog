import { FormEvent, useContext, useState } from 'react';
import styled from 'styled-components';

import { StorContext } from '../context/login/index';
import { setUsername } from '../store/login/index';

function LoginForm() {
  const { dispatch, state } = useContext(StorContext);
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
    <LoginBgStyle $active={active}>
      <LoginContainerStyle>
        <form
          className="col-sm-10 offset-sm-1 p-5 gx-3 text-center border"
          onSubmit={onSubmitForm}
        >
          <div className="col">
            <label className="p-2">
              Ваше имя:
              <input
                type="text"
                name="login"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="col">
            <input type="submit" className="btn btn-primary mb-2" value="Войти" />
          </div>
        </form>
      </LoginContainerStyle>
    </LoginBgStyle>
  );
}

export const LoginContainerStyle = styled.div`
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
  pointer-events: all;

  & FORM {
    margin-top: 35%;
  }

  & INPUT {
    margin: 5px;
  }
`;

export const LoginBgStyle = styled('div')<{ $active: boolean }>`
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
  pointer-events: none !important;
  transition: 0.5s;
  overflow-y: auto;

  & + DIV {
    opacity: 1;
    pointer-events: all;
  }
`;

export default LoginForm;
