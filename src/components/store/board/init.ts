import { Board } from './index';

export const Initializer = (state: Board): Board => {
  const formData = localStorage.getItem('storage') || '';
  try {
    return JSON.parse(formData);
  } catch (e) {
    localStorage.removeItem('storage');
    return state;
  }
};
