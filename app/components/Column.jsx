import React, {useEffect, useRef, useState} from 'react';
import { Popup } from './popupSettings.jsx';
import {getCards, changeName, addCard} from './columnSettings.js';

function ColumnHeader({change, current}) {
    const [activeChange, setActiveChange] = useState(false);
    const [inputText, setInputText] = useState(current);

    function updateInputText(e) {
        setInputText(changeName(current, inputText));
        setActiveChange(false);
    }

        return (
            <div className="column-header">
                {activeChange ? 
                    <input value={inputText} onChange={e => setInputText(e.target.value)}
                   onBlur={e => updateInputText(e)} /> :
                <h3 onClick={() => setActiveChange(true)}>{inputText}</h3>}
            </div>
        )
}

function ColumnCard({id, name, column, countcomment}) { 
    const [popupActive, setPopupActive] = useState(false);
    let showComment = countcomment != 0 ?
        <p className="column-card-footer">Count of comments:{countcomment}</p> : null;
    return (
        <div className="column-card" onClick={() => setPopupActive(true)}>
        <p>{name}</p>
        {showComment}
        <Popup active={popupActive} setActive={setPopupActive} id={id}/>
        </div>
    );
   }

function ColumnList({cards, column}) {
    return (
            <div className="container column-list-cards">
                {    cards.map((card) => {
        return(
            <ColumnCard
                    id={card.id}
                    name={card.name}
                    column={column}
                    countcomment={Array.isArray(card.comments) ? 
                                    card.comments.length : JSON.parse(card.comments).length} />
            )
        })}
            </div>
    )
}

function ColumnFooter({addcard, propA, propB}) {
    const [showClose, setShowClose] = useState(false);
    const prevPropA = useRef({propA, propB});

    function showInputName() {
        setShowClose(true);
    }

    function closeInputName() {
        setShowClose(false);
    }

    useEffect(() => {
        if(propA !== propB) {
            closeInputName();
        }
        propB = propA;
    }, [propA, propB]);

    const showFooter = showClose ? 
        <div className="column-footer">
            <div>
                <textarea className="input-name-card"
                    placeholder="Ввести заголовок для этой карточки" 
                    onBlur={addcard}></textarea>
            </div>
            <span className="controller-active" onClick={addcard}>Добавить карточку</span>
            <span className="close-input-name" onMouseDown={closeInputName}></span>
        </div>
        : 
        <div className="column-footer">
        <span className="footer-controller" onClick={showInputName}>+ Добавить карточку</span>
        </div>;

        return showFooter;
}

function Column({namecol})  {
    const [name, setName] = useState(namecol);
    const [cards, setCards] = useState(getCards(name));

    function updateCards() {
        setCards(getCards(name))
    }

    return (
        <div className="col-3 container trello-column">
            <ColumnHeader change={e => setName(e)} current={name} />
            <ColumnList cards={cards} column={name}/>
            <ColumnFooter addcard={e => addCard(e, name)} 
                          propA={cards} 
                          propB={() => updateCards()} />
        </div>
        );
    }

export default Column;