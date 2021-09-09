import ReactDOM from 'react-dom';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { LoginForm } from './components/login.jsx';
 
ReactDOM.render(
    <LoginForm />,
    document.getElementById('app')
)