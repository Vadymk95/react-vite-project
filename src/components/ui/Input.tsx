import { FC, InputHTMLAttributes } from 'react';

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  type = 'text',
  ...rest
}) => {
  return (
    <input
      className="rounded-xl outline-none border px-4 py-2 hover:border-primary focus:bg-primary-light"
      type={type}
      {...rest}
    />
  );
};
