import ReactDOM from 'react-dom';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { LoginForm } from './components/login.jsx';

// localStorage.cards = JSON.stringify([{author: "admin",column: "TODO",name: "",description: "",comments: []},
//                                      {author: "admin",column: "In Progress",name: "",description: "",comments: []}])

ReactDOM.render(
    <LoginForm />,
    document.getElementById('app')
)