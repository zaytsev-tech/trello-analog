import React, { useState, useEffect } from 'react';

function LoginForm() {
    let formData;
    const [name, setName] = useState(getName());
    const [active, setActive] = useState(true);

    function getName() {
        //return JSON.parse(localStorage.getItem('formdata')).name; меняем
    }

    function onSubmitForm(event) {
        event.preventDefault();
        event.stopPropagation();
        //localStorage.setItem('formdata', JSON.stringify({name: name})); меняем
        if(name != "") {
            setActive(false);
        } else {
            alert('Вы не ввели имя.')
        }
    }

    useEffect(() => {
        formData = getName();
    }, []);

    return (
        <div className={active ? "login active" : "login"}>
        <div className="row pt-5 login-container">
        <form 
            className="col-sm-10 offset-sm-1 p-5 gx-3 text-center border"
            onSubmit={onSubmitForm}>
            <div className="col">
                <label className="p-2">Ваше имя: 
                    <input type="text" 
                           name="login" 
                           value={name}
                           onChange={e => setName(e.target.value)} />
                </label>
            </div>
            <div className="col">
                <input type="submit" className="btn btn-primary mb-2" value="Войти" />
            </div>
        </form>
        </div>
        </div>);
}

export default LoginForm;