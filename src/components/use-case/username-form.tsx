import { Dispatch, FC, FormEvent, SetStateAction, useState } from 'react';
import styled from 'styled-components';

import { useBoardContext } from '../../context/board';
import { setUsername } from '../../store/board';

interface UserNameProps {
  setActive: Dispatch<SetStateAction<boolean>>;
}

export const UserNameForm: FC<UserNameProps> = ({ setActive }) => {
  const [state, dispatch] = useBoardContext();
  const [name, setName] = useState(state.name);

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

  function saveUsername(name: string) {
    dispatch(setUsername(name));
  }

  return (
    <ContainerForm onSubmit={onSubmitForm}>
      <div>
        <label>
          Ваше имя:
          <FormInput
            type="text"
            name="login"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <FormInput type="submit" value="Войти" />
      </div>
    </ContainerForm>
  );
};

const ContainerForm = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const FormInput = styled.input`
  margin: 5px;
`;
