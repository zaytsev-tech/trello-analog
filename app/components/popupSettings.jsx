import React, { useState, useEffect } from 'react';
import { AddNewComment, SaveStorageDesc, SetIdComment,
            DeleteComment, EditComment, DeleteCardStorage } from './storageFunc.jsx'
import { AllColumns } from './Board.jsx';
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

    const updateAfterDel = (e) => {
        e.stopPropagation();
        let parseCards = JSON.parse(localStorage.getItem("cards"));
        id = parseCards[parseCards.length-1];
    }
    return (
        <div className={active ? "popup active" : "popup"} onClick={(e) => {
            e.stopPropagation();
            return setActive(false); }}>
            <div className = {active ? "popup-content active" : "popup-content"} onClick={(e) => e.stopPropagation()}>
                <div className="header-popup"><h3>{searchedElement.name}</h3></div>
                <div className="header-column-popup">в колонке {searchedElement.column}</div>
                <div className="description-popup">{MakeDescription(searchedElement)}</div>
                <div className="comments-popup">{CommentBlock(searchedElement)}</div>
                <div className="delete-card" onClick={e => updateAfterDel(e)}>{DeleteCard(searchedElement)}</div>
            </div>
        </div>
    )
}

function DeleteCard(obj) {
    const [object, setObject] = useState(obj);
    const clickDelete = (e) => {
        e.stopPropagation();
        let parseCards = JSON.parse(localStorage.getItem("cards"));
        DeleteCardStorage(obj.id);
        setObject(parseCards[parseCards.length-1]);
        return ReactDOM.render(<AllColumns />, document.getElementById('app'));
    }
    
    return (
        <button className="delete-button btn btn-secondary btn-sm"
                onClick={(e) => clickDelete(e)}>Удалить карточку</button>
    )
}   

function MakeDescription(obj) {
    const [desc, setDesc] = useState(obj.description);
    const [active, setActive] = useState(false);
    const [text, setText] = useState("");
    let currentDesc = desc;

    if(currentDesc != "") {
        return (
        <div className="desсription-content"><h3>Описание</h3>
        <button onClick={() => setActive(true)} className="btn btn-secondary btn-sm">Изменить</button><br/>
        <div className={active ? "description-textarea active" : "description-textarea"}>
            <textarea className="popup-input-area" defaultValue={currentDesc}
                        onChange={(event) => setText(event.target.value)}></textarea>
            <div className={active ? "controller-textarea active" : "controller-textarea"}>
                <button className="btn btn-secondary btn-sm"
                        onClick={(e) => {setActive(false); setDesc(text); SaveStorageDesc(obj, text)}}>Сохранить</button>
                <span className="close-input-name" onClick={() => setActive(false)}></span>
            </div>
        </div>
        <p className={active ? "description-text": "description-text active"}>{currentDesc}</p>
        </div>
        );
    } else {
     return (
        <div className="desсription-content"><h3>Описание</h3>
        <div className="description-textarea active">
            <textarea className="popup-input-area" placeholder="Добавить более подробное описание..." 
                     onClick={() => setActive(true)} defaultValue={currentDesc}
                     onChange={(event) => setText(event.target.value)}></textarea><br/>
            <div className={active ? "controller-textarea active" : "controller-textarea"}>
                <button className="btn btn-secondary btn-sm"
                        onClick={(e) => {setActive(false); setDesc(text); SaveStorageDesc(obj, text)}}>Сохранить</button>
                <span className="close-input-name" onClick={() => setActive(false)}></span>
            </div>
        </div>
        </div>
    )}
}

function CommentElem({obj, elem, update}) {
    const [active, setActive] = useState(false);
    const [curText, setCurText] = useState(elem.text);

    function clickDelete(e) {
        DeleteComment(obj.id, elem.id);
        update()
    }

    function setEdit(event) {
        event.preventDefault();
        EditComment(obj.id, elem.id, curText);
        setActive(false);
    }

    return (
        <div className="comment-element">
            <div className="member-name">{elem.author ? elem.author.slice(0,1) : "-"}</div>
            <div className="comment-desc">
                <span className="comment-author-name">{elem.author}</span>
                <div className="comment-container">
                <div className={!active ? "current-comment active" : "current-comment"}>
                    <p>{curText}</p>
                    <div>
                        <button className="btn btn-secondary btn-sm"
                                onClick={() => {setActive(true)}}>Изменить</button>
                        <button className="btn btn-secondary btn-sm"
                                onClick={e => clickDelete(e)}>Удалить</button>
                    </div>
                    </div>
                    <div className={active ? "edit-comment-controller active" : "edit-comment-controller"}>
                        <form onSubmit={e => setEdit(e)}>
                            <textarea onChange={e => setCurText(e.target.value)} 
                                        defaultValue={curText}></textarea>
                            <input type="submit" value="Сохранить" 
                                    className="btn btn-primary btn-sm"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ShowListComments = (obj, upd) => {
    let listComments = [];
    let parseCards = JSON.parse(localStorage.getItem("cards"));
    for(let card of parseCards) {
        if(card.id == obj.id) {
        if(Array.isArray(obj.comments)) {
            for(let elem of obj.comments) {
                listComments.push(<CommentElem elem={elem} obj={obj} upd={upd} />);
            }
        }
      }
    }
        return listComments;
    }

function CommentBlock(obj) {
    const [comment, setComment] = useState(false);
    const [textComment, setTextComment] = useState("");

    const updateObj = () => {
        let parseCards = JSON.parse(localStorage.getItem("cards"));
        for(let elem of parseCards) {
            if(elem.id == obj.id) {
                obj = elem;
            }
        }
        return obj;
    }

    const getNameUser = () => {
        let parseForm = JSON.parse(localStorage.getItem("formdata"));
        return parseForm.name;
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        AddNewComment(obj, {id: SetIdComment(obj.id), author: getNameUser(), text: textComment});
        updateList(e);
        setComment(false);
        e.currentTarget.querySelector(".comment-textarea").value = "";
    }

    const updateList = (e) => {
        let updObj = updateObj();
        let result = ShowListComments(updObj, updateList);
        setContentList("");
        setContentList(result);
        if(e) {
            e.currentTarget.querySelector(".comment-textarea").value = "";
        }
    }

    useEffect((e) => {
        if(document.querySelector(".comments-list"))
            document.querySelector(".comments-list").innerHTML = contentList;
    }, [contentList]);

    const [contentList, setContentList] = useState(ShowListComments(obj, updateList));

    return (
        <div className="comments-popup">
            <h3>Действия</h3>
            <div className="member-name">{obj.author.slice(0,1)}</div>
            <div className="comment-box">
                <form onSubmit={e => {handlerSubmit(e)}}>
                    <textarea   className="comment-textarea"
                                placeholder="Напишите комментарий..."
                                onClick={() => setComment(true)}
                                onChange={event => setTextComment(event.target.value)}
                                ></textarea>
                    <input type="submit" value="Сохранить"
                            className={comment ? "save-com-button active btn btn-secondary btn-sm" 
                                        : "save-com-button btn btn-secondary btn-sm"} />
                </form>
            </div>
            <div className="comments-list">
                {contentList}
            </div>
        </div>
    )
}