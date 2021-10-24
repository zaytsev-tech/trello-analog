import React, { Component, useState } from 'react';
import { LoginForm } from './Login.jsx';
import '../../styles/style.css';
import Column from './Column.jsx';

export function AllColumns() {

    let parsedCards = JSON.parse(localStorage.getItem("cards"));
    const parseColumns = (parsedCards) => {
        let setCol = new Set();
        let masCol = [];
        for(let elem of parsedCards) {
            setCol.add(elem.column);
        }
        for(let val of setCol) {
            masCol.push(<Column namecol={val} />);
        }
        return masCol;
    }

    return (
            <div className="row page-style">
                <div className="row">
                    {parseColumns(parsedCards)}
                </div>
            </div>
    )
}