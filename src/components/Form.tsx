import { FC } from 'react';
import { Input, Button } from './ui';
import { useInput } from '../hooks/useInput';

type FormProps = {
  title: string;
  handleClick: () => void;
};

export const Form: FC<FormProps> = ({ title = 'Button', handleClick }) => {
  const email = useInput('');
  const password = useInput('');

  return (
    <div className="flex flex-col items-start gap-3">
      <label className="w-1/2">
        <span className="text-[14px] pl-4">Login:</span>
        <Input {...email} type="email" placeholder="Email" />
      </label>
      <label className="w-1/2">
        <span className="text-[14px] pl-4">Password:</span>
        <Input {...password} type="password" placeholder="Password" />
      </label>
      <Button onClick={handleClick}>{title}</Button>
    </div>
  );
};
