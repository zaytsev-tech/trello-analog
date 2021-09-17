import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export const SetIdCard = () => {
    let max = 0;
    const parsedCards = JSON.parse(localStorage.getItem('cards'));
    if(parsedCards == null || parsedCards.length == 0) return max.toString();
    for(let elem of parsedCards) {
        if(Number(elem.id) > Number(max))
            max = elem.id;
    }
    max = Number(max)+1;
    return max.toString();
}

export const ChangeColName = (prevName, currentName) => {
    let arr = JSON.parse(localStorage.getItem('cards'));
    for(let elem of arr) {
        if(elem.column == prevName) {
            elem.column = currentName;
        }
    }
    localStorage.setItem('cards', JSON.stringify(arr));
}

export const AddNewCard = (card) => {
    let arr = JSON.parse(localStorage.getItem('cards'));
    if(arr) {
    arr.push(card);
    localStorage.setItem('cards', JSON.stringify(arr));
    } else {
        localStorage.setItem('cards', JSON.stringify([card]));
    }
}