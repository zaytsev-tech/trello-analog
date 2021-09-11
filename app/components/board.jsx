import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/style.css';

const defaultCard = { 
    author: "", 
    column: "", 
    name: "", 
    description: "", 
    comments: [] 
   } 
    
   const defaultComment = { 
    author: "", 
    text: "" 
   } 

class Column extends Component {
    constructor(props) {
        super(props);
        this.changeName = this.changeName.bind(this);
        this.addCard = this.addCard.bind(this);
        this.state = {name: this.props.name,
                      cards: []}
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
                inputText.remove();
            } else {
                alert('Введите название колонки');
            }
        }
        this.setState({name: event.target.value, innerColumn: "innerColumn"+event.target.value})
    }

    addCard(event) {
        let parseLocalCards = JSON.parse(localStorage.cards);
        const inputNameCard = document.querySelector('.input-name-card');
        if(inputNameCard.value) {
                let newCard = Object.assign(defaultCard, {
                    author: JSON.parse(localStorage.formdata).name, 
                    column: this.state.name,
                    name: inputNameCard.value}); 
                parseLocalCards.push(newCard); 
                localStorage.cards = JSON.stringify(parseLocalCards); 
                this.setState({cards: [...this.state.cards, newCard]});
        }
    } 
    render() {
        return (
        <div className="col-4 container trello-column">
            <ColumnHeader changeName={this.changeName} currentName={this.state.name} />
            <ColumnList cards={this.state.cards} />
            <ColumnFooter addcard={this.addCard} />
        </div>
        );
    }
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

class ColumnList extends Component {
    render() {
    const cards = [];

    if(!localStorage.cards) { 
        localStorage.cards = "[]"; 
    }

    this.props.cards.forEach((card) => {
        cards.push(
            <ColumnCard
                    name={card.name}
                    countcomment={card.comments.length} />
        )
    });

    return (
            <div className="container column-list-cards">
                {cards}
            </div>
        )
    }
}

class ColumnFooter extends Component {
    constructor(props) {
        super(props);
        this.showInputName = this.showInputName.bind(this);
        this.closeInputName = this.closeInputName.bind(this);
        this.state = {
            showClose: this.props.createCard
        }
    }

    showInputName() {
        this.setState({ showClose: true })
    }

    closeInputName() {
        document.getElementsByClassName('controller-active')[0].classList.remove('controller-active');
        this.setState({ showClose: false })
    }

    render() {
        alert(this.state.showClose)
        const showFooter = this.state.showClose ? 
        <div className="column-footer">
            <div>
                <textarea className="input-name-card"
                    placeholder="Ввести заголовок для этой карточки" 
                    onBlur={this.props.addcard}></textarea>
            </div>
            <span className="controller-active" onClick={this.props.addcard}>Добавить карточку</span>
            <span className="close-input-name" onClick={this.closeInputName}></span>
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
     this.changeName = this.changeName.bind(this); 
     this.state = {name: this.props.name, countcomment: this.props.countcomment}; 
    } 

    changeName() {
        this.setState({name: this.props.name})
    }

    render() {
    return (
        <div className="column-card">
        <p>{this.state.name}</p>
        <p className="column-card-footer">Count of comments:{this.state.countcomment}</p>
        </div>
    )}
   }

export function AllColumns() {
    return (
        <div className="row page-style">
            <div className="row">
                <Column name="TODO" />
                <Column name="In Progress" />
            </div>
        </div>
    )
}