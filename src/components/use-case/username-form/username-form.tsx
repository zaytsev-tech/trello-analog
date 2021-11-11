import { Dispatch, FC, SetStateAction } from 'react';
import { Field, Form } from 'react-final-form';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { setUsername } from '../../../store/board/reducers';
import { userFormDefaultValues } from './default-values';

interface UserNameProps {
  setActive: Dispatch<SetStateAction<boolean>>;
}

export const UserNameForm: FC<UserNameProps> = ({ setActive }) => {
  const dispatch = useDispatch();

  function onSubmitForm(value: Record<string, string>) {
    if (value.name != '') {
      dispatch(setUsername(value.name));
      setActive(false);
    } else {
      alert('Вы не ввели имя.');
    }
  }

  return (
    <Form onSubmit={onSubmitForm} initialValues={userFormDefaultValues}>
      {({ handleSubmit }) => (
        <ContainerForm onSubmit={handleSubmit}>
          <div>
            <Field
              type="text"
              name="name"
              render={({ input: { value, onChange } }) => (
                <FormInput value={value} placeholder="Your name..." onChange={onChange} />
              )}
            />
          </div>
          <button type="submit">Log in</button>
        </ContainerForm>
      )}
    </Form>
  );
};

const ContainerForm = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const FormInput = styled.input`
  margin-bottom: 5px;
`;
