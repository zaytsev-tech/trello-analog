const initialUser = 'user1';
// const initialCards = ['0', 'noname', 'noname', '', ['0', 'noname', ''], 0];

export const InitializerUser = (initialValue = initialUser): string =>
  localStorage.getItem('formdata') || initialValue;

// export const InitializerCards = (initialValue = initialCards): Card[] =>
//   JSON.parse(localStorage.getItem('cards') || '{}') || initialValue;
