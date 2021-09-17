import React, { Component, useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/style.css';
import '../../styles/popup.css';

export const Popup = ({active, setActive, id}) => {
    let searchedElement = "";
    let parseCards = JSON.parse(localStorage.getItem("cards"));
            for(let elem of parseCards) {
                if(elem.id == id) {
                searchedElement = elem;
            }
        }
    return (
        <div className={active ? "popup active" : "popup"} onClick={(e) => {
            e.stopPropagation();
            return setActive(false); }}>
            <div className = {active ? "popup-content active" : "popup-content"} onClick={(e) => e.stopPropagation()}>
                <div className="header-popup">{searchedElement.name}</div>
                <div className="header-column-popup">в колонке {searchedElement.column}</div>
                <div className="description-popup">{MakeDescription(searchedElement)}</div>
                <div className="comments-popup">{CommentBlock(searchedElement)}</div>
            </div>
        </div>
    )
}

function MakeDescription(obj) {
    const [desc, setDesc] = useState(obj.description);
    const [active, setActive] = useState(false);
    const [text, setText] = useState("");
    let currentDesc = desc;

    const saveStorage = (event) => {
        let parseCards = JSON.parse(localStorage.getItem("cards"));
        let searchedElement = "";
        for(let elem of parseCards) {
            if(elem.id == obj.id) {
                elem.description = text;
                setDesc(text);
            }
        }
        localStorage.setItem('cards', JSON.stringify(parseCards));
    }

    if(currentDesc != "") {
        return (
        <div className="desription-content">Описание
        <button onClick={() => setActive(true)}>Изменить</button><br/>
        <div className={active ? "description-textarea active" : "description-textarea"}>
            <textarea className="popup-input-area" defaultValue={currentDesc}
                        onChange={(event) => setText(event.target.value)}></textarea>
            <div className={active ? "controller-textarea active" : "controller-textarea"}>
                <button onClick={(e) => {setActive(false); saveStorage(e)}}>Сохранить</button>
                <span className="close-input-name" onClick={() => setActive(false)}></span>
            </div>
        </div>
        <p className={active ? "description-text": "description-text active"}>{currentDesc}</p>
        </div>
        );
    } else {
     return (
        <div className="desription-content">Описание<br/>
        <div className="description-textarea active">
            <textarea className="popup-input-area" placeholder="Добавить более подробное описание..." 
                     onClick={() => setActive(true)} defaultValue={currentDesc}
                     onChange={(event) => setText(event.target.value)}></textarea><br/>
            <div className={active ? "controller-textarea active" : "controller-textarea"}>
                <button onClick={() => {setActive(false); saveStorage()}}>Сохранить</button>
                <span className="close-input-name" onClick={() => setActive(false)}></span>
            </div>
        </div>
        </div>
    )}
}

function CommentBlock(obj) {
    const [comment, setComment] = useState(false);
    const [textComment, setTextComment] = useState("");
    let parseCards = JSON.parse(localStorage.getItem("cards"));
    for(let elem of parseCards) {
        if(elem.id == obj.id) {
            obj = elem;
        }
    }
    return (
        <div className="comments-popup">
            Действия
            <div className="member-name">{obj.author.slice(0,1)}</div>
            <div className="comment-box">
                <form>
                    <textarea placeholder="Напишите комментарий..."
                                onClick={() => setComment(true)}
                                onBlur={() => setComment(false)}
                                onChange={(event) => setTextComment(event.target.value)}
                                ></textarea>
                    <input type="submit" className={comment ? "save-com-button active" : "save-com-button"}
                            onSubmit={() => addComment(obj, {author: obj.author, text: textComment})}
                            value="Сохранить"
                            />
                </form>
            </div>
            <div className="comments-list">
                {}
            </div>
        </div>
    )
}

function addComment(obj, comment) {
    let parseCards = JSON.parse(localStorage.getItem("cards"));
    for(let elem of parseCards) {
        if(elem.id == obj.id) {
            alert(1);
            alert(comment.text)
            elem.comments = elem.comments.push(comment);
        }
    }
    localStorage.setItem('cards', JSON.stringify(parseCards));
}