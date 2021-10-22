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

export function changeName(event, name) {
    let currentText = event.target.innerHTML;
    event.target.innerHTML = "";
    let inputText = document.createElement('input');
    inputText.value = currentText;
    event.target.before(inputText);
    inputText.addEventListener('blur', function() {
        if(inputText.value.length != 0) {
            event.target.innerHTML = inputText.value;
            currentText = ChangeColName(name, event.target.innerHTML);
            inputText.remove();
        } else {
            alert('Введите название колонки');
        }
    });
        return currentText;
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