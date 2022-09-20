import { FC, ButtonHTMLAttributes } from 'react';
import './styles.css';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  onClick,
}) => {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
};
