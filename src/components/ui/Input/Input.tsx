import { FC, InputHTMLAttributes } from 'react';
import './styles.css';

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  type = 'text',
  ...rest
}) => {
  return (
    <input
      className="input"
      type={type}
      {...rest}
    />
  );
};
