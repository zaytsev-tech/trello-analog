const initialState: string[] = [];
const initialUser = 'user1';

export const Initializer = (initialValue = initialState): any =>
  localStorage.getItem('cards') || initialValue;

export const InitializerUser = (initialValue = initialUser): string =>
  localStorage.getItem('formdata') || initialValue;

interface Card {
  name: string;
}

export const storageReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return action.item;

    case 'ADD_CARD':
      return [...state, ...action.item];

    case 'DELETE_CARD':
      return state.filter((item: Card) => item.name !== action.item.name);

    default:
      return state;
  }
};

export const setUsername = (item: string) => ({
  type: 'SET_USERNAME',
  item,
});

export const addCard = (item: Card) => ({
  type: 'ADD_CARD',
  item,
});

export const deleteCard = (item: Card) => ({
  type: 'DELETE_CARD',
  item,
});
