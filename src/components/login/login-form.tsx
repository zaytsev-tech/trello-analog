import '../../styles/style.css';

import { FormEvent, useContext, useState } from 'react';

import { StorContext } from '../context/login/index';
import { setUsername } from '../store/login/index';

if (!localStorage.getItem('cards')) {
  localStorage.setItem('cards', '[]');
}

function LoginForm() {
  const { dispatch, state } = useContext(StorContext);
  const [name, setName] = useState(state);
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
    <div className={active ? 'login active' : 'login'}>
      <div className="row pt-5 login-container">
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
      </div>
    </div>
  );
}

export default LoginForm;
