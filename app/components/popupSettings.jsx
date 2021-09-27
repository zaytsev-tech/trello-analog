import React, { Component, useState, useEffect, useContext } from 'react';
import { AddNewComment, SaveStorageDesc, SetIdComment,
            DeleteComment, EditComment, DeleteCardStorage } from './storageFunc.jsx'
import { AllColumns } from './board.jsx';
import ReactDOM from 'react-dom';
import '../../styles/style.css';
import '../../styles/popup.css';
import { updateCommaList } from 'typescript';

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

class CommentElem extends Component {
    constructor(props) {
        super(props);
        this.setEdit = this.setEdit.bind(this);
        this.handleActive = this.handleActive.bind(this);
        this.clickDelete = this.clickDelete.bind(this);
        this.handleText = this.handleText.bind(this);
        this.state = { active: false,
                        currentText: this.props.elem.text}
    }

    handleActive(mode) {
        this.setState({active: mode})
    }

    handleText(text) {
        this.setState({currentText: text})
    }

    clickDelete(e) {
        DeleteComment(this.props.obj.id, this.props.elem.id);
        this.props.upd()
    }

    setEdit(event) {
        event.preventDefault();
        EditComment(this.props.obj.id, this.props.elem.id, this.state.currentText);
        this.setState({active: false})
    }

    render() {
    return (
        <div className="comment-element">
            <div className="member-name">{this.props.elem.author.slice(0,1)}</div>
            <div className="comment-desc">
                <span className="comment-author-name">{this.props.elem.author}</span>
                <div className="comment-container">
                <div className={!this.state.active ? "current-comment active" : "current-comment"}>
                    <p>{this.state.currentText}</p>
                    <div>
                        <button className="btn btn-secondary btn-sm"
                                onClick={() => {this.handleActive(true)}}>Изменить</button>
                        <button className="btn btn-secondary btn-sm"
                                onClick={e => this.clickDelete(e)}>Удалить</button>
                    </div>
                    </div>
                    <div className={this.state.active ? "edit-comment-controller active" : "edit-comment-controller"}>
                        <form onSubmit={e => this.setEdit(e)}>
                            <textarea onChange={e => this.handleText(e.target.value)} 
                                        defaultValue={this.state.currentText}></textarea>
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

    const handlerSubmit = (e) => {
        e.preventDefault();
        AddNewComment(obj, {id: SetIdComment(obj.id), author: obj.author, text: textComment});
        updateList(e);
        setComment(false);
        e.currentTarget.querySelector(".comment-textarea").value = "";
    }

    const updateList = async (e) => {
        let updObj = updateObj();
        let result = await ShowListComments(updObj, updateList);
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