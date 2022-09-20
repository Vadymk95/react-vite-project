import { FC, InputHTMLAttributes } from 'react';

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ type = 'text', ...rest }) => {
  return (
    <input
      className="rounded-xl outline-none border px-4 py-2 hover:border-purple-600 focus:bg-purple-100"
      type={type}
      {...rest}
    />
  );
};
