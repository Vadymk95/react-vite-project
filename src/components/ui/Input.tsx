import { FC, InputHTMLAttributes } from 'react';
import { useInput } from '../../hooks';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputValue: string | number;
}

export const Input: FC<InputProps> = ({
  type = 'text',
  inputValue,
  ...rest
}) => {
  const value = useInput(inputValue);
  return (
    <input
      className="rounded-xl outline-none border px-4 py-2 hover:border-purple-600 focus:bg-purple-100"
      type={type}
      {...value}
      {...rest}
    />
  );
};
