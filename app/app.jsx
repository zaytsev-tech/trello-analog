import ReactDOM from 'react-dom';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { LoginForm } from './components/login.jsx';

function checkLS() {
    if(JSON.parse(localStorage.getItem("cards")).length == 0) {
        localStorage.setItem("cards", JSON.stringify([{id: "1", author: "admin",column: "TODO",name: "Hello TODO",description: "",comments: []},
                                         {id: "2", author: "admin",column: "In Progress",name: "Hello Purrweb",description: "",comments: []},
                                         {id: "3", author: "admin",column: "Testing",name: "Test",description: "",comments: []},
                                         {id: "4", author: "admin",column: "Done",name: "Complete",description: "",comments: []}]));
    }
}

checkLS();

ReactDOM.render(
    <LoginForm />,
    document.getElementById('app')
)