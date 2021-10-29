import { Board } from './../board/index';

export const InitializerUser = (): Board => {
  const formData = localStorage.getItem('storage') || '';
  try {
    return JSON.parse(formData);
  } catch (e) {
    localStorage.removeItem('storage');
    return {
      name: '',
      columns: {
        '0': {
          key: 'column-key',
          name: 'column-test',
          cards: {
            '0': {
              key: 'card-key',
              name: 'card-name',
              author: 'card-author',
              description: 'card-desc',
              comments: {
                '0': {
                  key: 'comment-key',
                  author: 'comment-author',
                  text: 'comment-text',
                },
              },
            },
          },
        },
      },
    };
  }
};
