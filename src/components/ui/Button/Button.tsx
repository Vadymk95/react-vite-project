import { FC, ButtonHTMLAttributes } from 'react';
import './styles.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styles?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  styles
}) => {
  return (
    <button onClick={onClick} className={`button ${styles}`}>
      {children}
    </button>
  );
};
