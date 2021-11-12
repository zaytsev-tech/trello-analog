import { Comment } from '../../../../../store/board';

export interface CurrCommentDefaultValues {
  comment: string;
}

export const currCommentDefaultValues = (comment: Comment): CurrCommentDefaultValues => {
  return { comment: comment.text };
};
