import { SetIdCard, ChangeColName, AddNewCard } from './storageFunc.jsx';

const defaultCard = {
    id: "0",
    author: "", 
    column: "", 
    name: "", 
    description: "", 
    comments: "[]" 
   }

export function getCards(name) {
    let parsedCards = JSON.parse(localStorage.getItem('cards'));
    let masColumnCards = [];
    if(parsedCards) {
        for(let elem of parsedCards) {
            if(elem.column == name) {
                masColumnCards.push(elem);
            }
        }
    }
    return masColumnCards;
}

export function changeName(current, name) {
        if(name.length > 0) {
            return ChangeColName(current, name);
        } else {
            alert('Введите название колонки');
        }
}

export function addCard(event, name) {
    const inputNameCard = document.querySelector('.input-name-card');
    if(inputNameCard.value) {
            let newCard = Object.assign(defaultCard, {
                id: SetIdCard(),
                author: JSON.parse(localStorage.formdata).name, 
                column: name,
                name: inputNameCard.value});       
            AddNewCard(newCard);
            return newCard;
    }
}