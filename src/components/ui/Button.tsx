import { FC, ButtonHTMLAttributes } from 'react';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="rounded-xl text-white bg-primary px-4 py-2 border hover:bg-primary-lighter hover:border-primary transition"
    >
      {children}
    </button>
  );
};
