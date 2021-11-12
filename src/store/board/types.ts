export interface Board {
  name: string;
  columns: Record<string, Column>;
}

export interface Column {
  key: string;
  name: string;
  cards: Record<string, Card>;
}

export interface Card {
  key: string;
  name: string;
  author: string;
  description: string;
  comments: Record<string, Comment>;
}

export interface Comment {
  key: string;
  author: string;
  text: string;
}
