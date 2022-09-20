import { FC } from 'react';
import { Input } from './ui/Input';
import { useInput } from '../hooks/useInput';

export const Form: FC = () => {
  const email = useInput('');
  const password = useInput('');

  return (
    <div>
      <Input {...email} type="email" placeholder="Email" />
      <Input {...password} type="password" placeholder="Password" />
    </div>
  );
};
