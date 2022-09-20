import { FC } from 'react';
import { Input, Button } from './ui';
import { useInput } from '../hooks/useInput';

export const Form: FC = () => {
  const email = useInput('');
  const password = useInput('');

  return (
    <div>
      <Input {...email} type="email" placeholder="Email" />
      <Input {...password} type="password" placeholder="Password" />
      <Button>Login</Button>
    </div>
  );
};
