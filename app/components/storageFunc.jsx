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

export const SetIdComment = (id) => {
    let max = 0,
        elem = "";
    const parsedCards = JSON.parse(localStorage.getItem('cards'));
    for(let val of parsedCards) {
        if(val.id == id) {
            elem = val;
        }
    }
    if(elem.comments == null || elem.comments.length == 0) return max.toString();
    for(let value of elem.comments) {
        if(Number(value.id) > Number(max))
            max = value.id;
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
    return currentName;
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

export const SaveStorageDesc = (obj, text) => {
    let parseCards = JSON.parse(localStorage.getItem("cards"));
    let searchedElement = "";
    for(let elem of parseCards) {
        if(elem.id == obj.id) {
            elem.description = text;
        }
    }
    localStorage.setItem('cards', JSON.stringify(parseCards));
}

export const AddNewComment = (obj, comment) => {
    let parseCards = JSON.parse(localStorage.getItem("cards"));
    if(comment) {
    for(let elem of parseCards) {
        if(elem.id == obj.id) {
            if(!Array.isArray(elem.comments)) {
                elem.comments = [];
            }
            elem.comments.push(comment);
        }
    }
    }
    localStorage.setItem('cards', JSON.stringify(parseCards));
}

export const DeleteComment = (objectId, id) => {
    let parsedCards = JSON.parse(localStorage.getItem("cards"));
    for(let elem of parsedCards) {
        if(elem.id == objectId) {
            for(let i = 0; i < elem.comments.length; i++) {
                if(elem.comments[i].id == id) {
                    elem.comments.splice(i, 1);
                    break;
                }
            }
        }
    }
    localStorage.setItem('cards', JSON.stringify(parsedCards));
}

export const DeleteCardStorage = (objectId) => {
    let parsedCards = JSON.parse(localStorage.getItem("cards"));
    for(let elem = 0; elem < parsedCards.length; elem++) {
        if(parsedCards[elem].id == objectId) {
            parsedCards.splice(elem, 1);
        }
    }
    localStorage.setItem('cards', JSON.stringify(parsedCards));
}

export const EditComment = (objectId, commentId, newText) => {
    let parsedCards = JSON.parse(localStorage.getItem("cards"));
    for(let elem of parsedCards) {
        if(elem.id == objectId) {
            for(let i = 0; i < elem.comments.length; i++) {
                if(elem.comments[i].id == commentId) {
                    elem.comments[i].text = newText;
                }
            }
        }
    }
    localStorage.setItem('cards', JSON.stringify(parsedCards));
}