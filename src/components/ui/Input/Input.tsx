import { FC, InputHTMLAttributes } from 'react';
import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  valid?: boolean;
  reset: () => void;
}

export const Input: FC<InputProps> = ({
  type = 'text',
  valid = true,
  reset,
  ...rest
}) => {
  return (
    <input
      className={`input ${valid ? '' : 'input__error'}`}
      type={type}
      {...rest}
    />
  );
};
