import { Board } from './types';

export const InitializerUser = (): Board => {
  const formData = localStorage.getItem('storage') || '';
  try {
    return JSON.parse(formData);
  } catch (e) {
    localStorage.removeItem('storage');
    return {
      name: '',
      columns: {
        0: {
          key: '',
          name: '',
          cards: {
            0: {
              key: '',
              author: '',
              description: '',
              comments: { 0: { key: '', author: '', text: '' } },
              countComments: 0,
            },
          },
        },
      },
    };
  }
};
