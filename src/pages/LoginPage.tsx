import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '../components';
import { EnumRoutes } from '../router';

export const LoginPage: FC = () => {
  return (
    <div>
      <h1>Login</h1>
      <Form />
      <p>
        Or <Link to={EnumRoutes.REGISTER_ROUTE}>register</Link>
      </p>
    </div>
  );
};
