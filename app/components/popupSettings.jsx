import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/style.css';

export class OpenPopup extends Component {
    constructor(props) {
        super(props);
        const parseLS = JSON.parse(localStorage.cards);
        const openedCard = "";
        for(let elem of parseLS) {
            if(elem.column == this.props.column &&
                elem.name == this.props.name) {
                    openedCard = elem;
                }
        }
    }
    render() {
        return (
            <div className="popup">
                <div className="header-popup">
                    <h3 className="popup-name-card">{openedCard.name}</h3>
                </div>
            </div>
        )
    }
}