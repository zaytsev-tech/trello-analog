type Card = {
  key: string;
  author: string;
  nameColumn: string;
  description: string;
  comments: Comment[];
  countComments: number;
};

type Comment = {
  key: string;
  author: string;
  text: string;
};

type ActionCard = { type: 'ADD_CARD'; item: Card } | { type: 'DELETE_CARD'; item: Card };

type ActionUsername = { type: 'SET_USERNAME'; item: string };

const initialUser = 'user1';
const initialCards = ['0', 'noname', 'noname', '', ['0', 'noname', ''], 0];

const InitializerUser = (initialValue = initialUser): string =>
  localStorage.getItem('formdata') || initialValue;

const InitializerCards = (initialValue = initialCards): Card[] =>
  JSON.parse(localStorage.getItem('cards') || '{}') || initialValue;

const cardStorageReducer = (state: [Card], action: ActionCard) => {
  switch (action.type) {
    case 'ADD_CARD':
      return [
        ...state,
        {
          key: action.item.key,
          author: action.item.author,
          nameColumn: action.item.nameColumn,
          description: action.item.description,
          comments: action.item.comments,
          countComments: action.item.countComments,
        },
      ];

    case 'DELETE_CARD':
      return state.filter((item: Card) => item.nameColumn !== action.item.nameColumn);

    default:
      return state;
  }
};

const userStorageReducer = (state: string, action: ActionUsername) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return action.item;

    default:
      return state;
  }
};

const setUsername = (item: string) => ({
  type: 'SET_USERNAME',
  item,
});

const addCard = (item: Card) => ({
  type: 'ADD_CARD',
  item,
});

const deleteCard = (item: Card) => ({
  type: 'DELETE_CARD',
  item,
});

export {
  InitializerUser,
  cardStorageReducer,
  userStorageReducer,
  setUsername,
  addCard,
  deleteCard,
};
