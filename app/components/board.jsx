import React, { Component } from 'react';
import '../../styles/style.css';

class Column extends Component {
    constructor(props) {
        super(props);
        this.changeName = this.changeName.bind(this);
        this.addCard = this.addCard.bind(this);
        this.state = {name: this.props.name, cards: []}
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
        this.setState({name: event.target.value})
    }

    addCard(event) {
        this.setState({cards: event.target.value});
    }

    render() {
        return (
        <div className="col container trello-column">
            <h3 onClick={this.changeName}>{this.state.name}</h3>
            <div className="container">
            </div>
            <div className="trello-column-footer">
                <p>+ Добавить карточку</p>
            </div>
        </div>
        );
    }

}

export function AllColumns() {
    return (
        <div className="row page-style">
            <div>
                <Column name="TODO" />
            </div>
        </div>
    )
}