import { FC } from 'react';

export interface ButtonProp {
  text?: string;
  className?: string;
  onClick?: () => void;
  onMouseDown?: () => void;
}

export const Button: FC<ButtonProp> = ({ text, className, onClick, onMouseDown }) => {
  return (
    <>
      {onMouseDown ? (
        <button className={className} onMouseDown={onMouseDown}>
          {text}
        </button>
      ) : (
        <button className={className} onClick={onClick}>
          {text}
        </button>
      )}
    </>
  );
};
