import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AllColumns } from './board.jsx';

if(!localStorage.getItem("cards")) { 
    localStorage.setItem("cards", "[]"); 
}  

export class LoginForm extends Component {

    Data;

    constructor(props) {
        super(props);
        this.eventName = this.eventName.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.state = {name: ''}
    }

    eventName(event) {
        this.setState({name: event.target.value})
    }

    onSubmitForm(event) {
        event.preventDefault();
        localStorage.setItem('formdata', JSON.stringify(this.state));
        ReactDOM.render(<AllColumns />, document.getElementById('app'));
    }

    componentDidMount() {
        this.Data = JSON.parse(localStorage.getItem('formdata'));
    }

    render() {
    return (
        <div className="row pt-5">
        <form 
            className="col-sm-10 offset-sm-1 p-5 gx-3 text-center border"
            onSubmit={this.onSubmitForm}>
            <div className="col">
                <label className="p-2">Ваше имя: 
                    <input type="text" 
                           name="login" 
                           value={this.state.name}
                           onChange={this.eventName} />
                </label>
            </div>
            <div className="col">
                <input type="submit" className="btn btn-primary mb-2" value="Войти" />
            </div>
        </form>
        </div>);
    }
}