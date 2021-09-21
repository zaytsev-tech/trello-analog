import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import { Popup } from './popupSettings.jsx';
import { SetIdCard, ChangeColName, AddNewCard } from './storageFunc.jsx'
import '../../styles/style.css';

const defaultCard = {
    id: "0",
    author: "", 
    column: "", 
    name: "", 
    description: "", 
    comments: "[]" 
   }

class ColumnHeader extends Component {
    render() {
        return (
            <div className="column-header">
                <h3 onClick={this.props.changeName}>{this.props.currentName}</h3>
            </div>
        );
    }
}

class ColumnFooter extends Component {
    constructor(props) {
        super(props);
        this.showInputName = this.showInputName.bind(this);
        this.closeInputName = this.closeInputName.bind(this);
        this.state = {
            showClose: false
        }
    }

    showInputName() {
        this.setState({ showClose: true })
    }

    closeInputName() {
        //document.getElementsByClassName('controller-active')[0].classList.remove('controller-active');
        this.setState({ showClose: false })
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if(this.props.createcard !== nextProps.createcard)
            this.closeInputName();
    }

    render() {
        const showFooter = this.state.showClose ? 
        <div className="column-footer">
            <div>
                <textarea className="input-name-card"
                    placeholder="Ввести заголовок для этой карточки" 
                    onBlur={this.props.addcard}></textarea>
            </div>
            <span className="controller-active" onClick={this.props.addcard}>Добавить карточку</span>
            <span className="close-input-name" onMouseDown={this.closeInputName}></span>
        </div>
        : 
        <div className="column-footer">
        <span className="footer-controller" onClick={this.showInputName}>+ Добавить карточку</span>
        </div>;
        return (
            showFooter
        )
    }
}

class ColumnCard extends Component { 
    constructor(props) { 
     super(props); 
     this.setPopupActive = this.setPopupActive.bind(this);
     this.state = {id: this.props.id,
                   name: this.props.name,
                   countcomment: this.props.countcomment,
                   popupActive: false}; 
    } 

    setPopupActive(val) {
        this.setState({popupActive: val})
    }

    render() {
        let showComment = this.state.countcomment != 0 ?
        <p className="column-card-footer">Count of comments:{this.state.countcomment}</p> : null;
    return (
        <div className="column-card" onClick={() => this.setPopupActive(true)}>
        <p>{this.state.name}</p>
        {showComment}
        <Popup active={this.state.popupActive} setActive={this.setPopupActive} id={this.state.id}/>
        </div>
    )}
   }

   class ColumnList extends Component {    
    render() {
    const cards = [];
    this.props.cards.forEach((card) => {
        cards.push(
            <ColumnCard
                    id={card.id}
                    name={card.name}
                    column={this.props.column}
                    countcomment={Array.isArray(card.comments) ? 
                                    card.comments.length : JSON.parse(card.comments).length} />
        )
    });
    return (
            <div className="container column-list-cards">
                {cards}
            </div>
        )
    }
}

class Column extends Component {
    constructor(props) {
        super(props);
        this.changeName = this.changeName.bind(this);
        this.addCard = this.addCard.bind(this);
        this.getCards = this.getCards.bind(this);
        this.state = {name: this.props.name,
                      cards: []}
    }

    getCards() {
        let parsedCards = JSON.parse(localStorage.getItem('cards'));
        let masColumnCards = [];
        if(parsedCards) {
            for(let elem of parsedCards) {
                if(elem.column == this.props.name) {
                    masColumnCards.push(elem);
                }
            }
        }
        this.setState({cards: masColumnCards});
        return masColumnCards;
    }

    changeName(event) {
        let currentText = event.target.innerHTML;
        event.target.innerHTML = "";
        let inputText = document.createElement('input');
        inputText.value = currentText;
        event.target.before(inputText);
        inputText.onblur = function() {
            if(inputText.value.length != 0) {
                event.target.innerHTML = inputText.value;
                ChangeColName(this.state.name, event.target.innerHTML);
                this.setState({name: inputText.value})
                inputText.remove();
            } else {
                alert('Введите название колонки');
            }
        }.bind(this);
    }

    addCard(event) {
        const inputNameCard = document.querySelector('.input-name-card');
        if(inputNameCard.value) {
                let newCard = Object.assign(defaultCard, {
                    id: SetIdCard(),
                    author: JSON.parse(localStorage.formdata).name, 
                    column: this.state.name,
                    name: inputNameCard.value});       
                AddNewCard(newCard);
                this.setState({cards: [...this.state.cards, newCard]});
        }
    } 
    render() {
        if(this.state.cards.length == 0)
            this.getCards();

        return (
        <div className="col-4 container trello-column">
            <ColumnHeader changeName={this.changeName} currentName={this.state.name} />
            <ColumnList cards={this.state.cards} column={this.state.name}/>
            <ColumnFooter addcard={this.addCard} createcard={this.state.cards} />
        </div>
        );
    }
}

export function AllColumns() {

    let parsedCards = JSON.parse(localStorage.getItem("cards"));

    const parseColumns = (parsedCards) => {
        let setCol = new Set();
        let masCol = [];
        for(let elem of parsedCards) {
            setCol.add(elem.column);
        }
        for(let val of setCol) {
            masCol.push(<Column name={val} />);
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